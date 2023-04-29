import {Pacman} from "./Pacman/Pacman.js";

export class Game
{
    constructor(canvas, fps = 60) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.game = new Pacman()

        this.state = {
            stop: false,
            debug: false,
        };

        this.maxFps = fps

        this.timings = {
            seconds: Math.ceil(Date.now()/1000),
            fpsInterval: 1000 / this.maxFps,
            startTime: Date.now(),
            then: Date.now(),
        }

        this.frameCount = 0;
        this.framesLast = 0;

        this.registerKeys()
    }

    registerKeys() {
        addEventListener('keydown', ({key}) => {
            switch (key) {
                case 'p':
                    this.state.stop = true
                    break
                case ' ':
                    this.state.debug = true
            }
        });

        addEventListener('keyup', ({key}) => {
            switch (key) {
                case 'p':
                    this.state.stop = false
                    break
                case ' ':
                    this.state.debug = false
            }
        });
    }

    frameAnimation () {
        requestAnimationFrame(() => this.frameAnimation())

        let now = Date.now();
        let elapsed = now - this.timings.then;

        if (!this.state.stop && elapsed > this.timings.fpsInterval) {
            this.timings.then = now - (elapsed % this.timings.fpsInterval);
            if (this.timings.seconds < Math.ceil(now/1000))
            {
                this.framesLast = this.frameCount
                this.frameCount = 0;
                this.timings.seconds = Math.ceil(now/1000)
            }

            this.reset()
            this.game.animate(this.canvas)
            this.renderDebug()

            this.frameCount++
        }
    }

    run() {
        this.frameAnimation()
    }

    reset() {
        this.canvas.height = innerHeight
        this.canvas.width = innerWidth

        this.context.reset()
        this.context.fillStyle = '#000000'
        this.context.fillRect(0,0, this.canvas.width, this.canvas.height)
    }

    renderDebug() {
        if (!this.state.debug) {
            return
        }

        this.context.fillStyle = '#FFFFFF'
        this.context.font = "bold 20px serif"
        this.context.fillText(this.framesLast + 'fps', this.canvas.width - 50, this.canvas.height - 10)
    }
}
