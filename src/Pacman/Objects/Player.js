export class Player {

    shift = 0;
    frameWidth = 16;
    frameHeight = 16;
    startFrame = 0;
    totalFrames = 5;
    currentFrame = 0;
    frameDelay = 0;
    spritePerFrames = 0
    speed = 6


    position = {
        x: 0,
        y: 0
    }

    velocity = {
        x: 0,
        y: 0
    }

    constructor(game) {
        this.game = game
        this.myImage = new Image();
        this.myImage.src = "../../../sprites/Pac-Man-Original.png";
        this.myImage.src = "../../../sprites/Pac-Man_SNES.gif";

        this.registerKeys()


    }

    draw (startPositionX, startPositionY) {

        if (this.position.x === 0) {
            this.position.x = startPositionX
        }
        if (this.position.y === 0) {
            this.position.y = startPositionY
        }

        let context = this.game.context

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        context.drawImage(this.myImage, this.shift, 0, this.frameWidth, this.frameHeight,
            this.position.x, this.position.y, this.frameWidth, this.frameHeight);

        this.frameDelay++

        if (this.frameDelay >= this.game.maxFps / (this.totalFrames * 4)) {
            this.shift += this.frameWidth + 1

            this.currentFrame++

            if (this.currentFrame >= this.totalFrames) {
                this.currentFrame = 0
                this.shift = this.startFrame
            }

            this.frameDelay = 0
        }
    }


    registerKeys() {
        addEventListener('keydown', ({key}) => {
            switch (key) {
                case 'w':
                    this.velocity.y = -this.speed
                    break
                case 'a':
                    this.velocity.x = -this.speed
                    break
                case 's':
                    this.velocity.y = this.speed
                    break
                case 'd':
                    this.velocity.x = this.speed
                    break
            }
        });
        addEventListener('keyup', ({key}) => {
            switch (key) {
                case 'w':
                    this.velocity.y = 0
                    break
                case 'a':
                    this.velocity.x = 0
                    break
                case 's':
                    this.velocity.y = 0
                    break
                case 'd':
                    this.velocity.y = 0
                    break
            }
        });
    }
}