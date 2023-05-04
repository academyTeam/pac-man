import {Pacman} from "../Pacman.js";

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

       // this.drawMrPacman()
    }

    draw (startPositionX, startPositionY) {

        if (this.position.x === 0) {
            this.position.x = startPositionX+12
        }
        if (this.position.y === 0) {
            this.position.y = startPositionY+12
        }

        let context = this.game.context

        let potentialX = this.position.x + this.velocity.x
        let potentialY = this.position.y + this.velocity.y

        if (this.isCollisionX(potentialX)) {
            potentialX = this.position.x
        }

        if (this.isCollisionX(potentialX)) {
            potentialY = this.position.y
        }

        this.position.x = potentialX
        this.position.y = potentialY

        context.drawImage(this.myImage, this.shift, 0, this.frameWidth, this.frameHeight,
           this.position.x, this.position.y, this.frameWidth, this.frameHeight);

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

    isCollisionX(potentialX) {

        // // TODO check right
        // Pacman.playground.forEach(line => {
        //     line.forEach(field => {
        //         // todo: find right box
        //         // todo: get left border (postion of box + wall.size / 2)
        //         if (potentialX > positionOfBoxBorder) {
        //             return true
        //         }
        //     })
        // });

        // Pacman.playground.forEach(line => {
        //     line.forEach(field => {
        //         // todo: find left box
        //         // todo: get right border (postion of box + wall.size / 2)
        //         if (potentialX > positionOfBoxBorder) {
        //             return true
        //         }
        //     })
        // });


        return false;
    }
}
