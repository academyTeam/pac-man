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
    playerWidth = 32
    playerHeight = 32
    canvas = document.getElementById('player')
    context = this.canvas.getContext("2d")


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

       // this.drawMrPacman()
    }

    draw (startPositionX, startPositionY) {
        this.canvas.height = innerHeight
        this.canvas.width = innerWidth

        if (this.position.x === 0) {
            this.position.x = startPositionX
        }
        if (this.position.y === 0) {
            this.position.y = startPositionY
        }

        if (this.position.x += this.velocity.x) {
            this.position.x += this.velocity.x
        }
        if (this.position.y += this.velocity.y) {
            this.position.y += this.velocity.y
        }


        this.context.imageSmoothingEnabled = false;

        this.context.drawImage(this.myImage, this.shift, 0, this.frameWidth, this.frameHeight,
           this.position.x, this.position.y, this.playerWidth, this.playerHeight);

        // add transparency to sprites
        const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            // if the pixel matches our transparent color, set alpha to 0
            if(data[i] === 128 && data[i + 1] === 0 && data[i + 2] === 128) {
                data[i+3] = 0;
            }
        }
        this.context.putImageData(imageData, 0, 0);

        this.frameDelay++
        if (this.frameDelay >= this.game.maxFps / (this.totalFrames * 4)) {

            this.shift += this.frameWidth + 0

            this.currentFrame++
            if (this.currentFrame >= this.totalFrames) {
                this.currentFrame = 0
                this.shift = this.startFrame

            }
            this.frameDelay = 0

        }
    }

    drawMrsPacman() {
        shift = 0;
        frameWidth = 16;
        frameHeight = 16;
        startFrame = 0;
        totalFrames = 5;
        typeFrame = 0;
    }


    drawMrPacman() {
        this.shift = 0;
        frameWidth = 16;
        frameHeight = 16;
        startFrame = 0;
        totalFrames = 5;
        typeFrame = 16;
    }

    drawMrsPacmanUp() {
         shift = 0;
         frameWidth = 16;
         frameHeight = 16;
         startFrame = 6;
         totalFrames = 5;
         typeFrame = 0;
    }

    registerKeys() {
        addEventListener('keydown', ({key}) => {
            switch (key) {
                case 'w':
                case 'ArrowUp':
                    this.velocity.y = -this.speed
                    break
                case 'a':
                case 'ArrowLeft':
                    this.velocity.x = -this.speed
                    break
                case 's':
                case 'ArrowDown':
                    this.velocity.y = this.speed
                    break
                case 'd':
                case 'ArrowRight':
                    this.velocity.x = this.speed
                    break
            }
        });


        addEventListener('keyup', ({key}) => {
            switch (key) {
                case 'w':
                case 'ArrowUp':
                    this.velocity.y = 0
                    break
                case 'a':
                case 'ArrowLeft':
                    this.velocity.x = 0
                    break
                case 's':
                case 'ArrowDown':
                    this.velocity.y = 0
                    break
                case 'd':
                case 'ArrowRight':
                    this.velocity.x = 0
                    break
            }
        });
    }
}
