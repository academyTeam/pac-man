import {Pacman} from "../Pacman.js";
import {Wall} from "./Wall.js";

export class Player {

    shift = 0;
    frameWidth = 16;
    frameHeight = 16;
    startFrame = 0;
    totalFrames = 5;
    currentFrame = 0;
    frameDelay = 0;
    spritePerFrames = 0
    speed = 4
    playerWidth = 32
    playerHeight = 32
    canvas = document.getElementById('player')
    context = this.canvas.getContext("2d")


    position = {
        x: -99,
        y: -99
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

        if (this.position.x === -99) {
            this.position.x = startPositionX
        }
        if (this.position.y === -99) {
            this.position.y = startPositionY
        }

        let context = this.game.context

        this.checkCollision()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


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

    checkCollision() {

        let tolerance = 4

        let positionPlayer = {
            center: {
                x: this.position.x - Pacman.left + this.playerWidth / 2,
                y: this.position.y - Pacman.top + this.playerHeight / 2
            },

            left: this.position.x - Pacman.left + tolerance,
            right: this.position.x - Pacman.left + this.playerWidth - tolerance,
            top: this.position.y - Pacman.top + tolerance,
            bottom: this.position.y - Pacman.top + this.playerHeight - tolerance
        }

        this.context.fillStyle = '#FFFFFF'
        let coor = {
            x: 0,
            y: 0
        }
        this.context.fillText(positionPlayer.top + 'x' + positionPlayer.left, 10, 10)

        Pacman.playground.forEach((row, lineIndex) => {
            if (lineIndex * Wall.size < positionPlayer.center.y && (lineIndex + 1) * Wall.size >= positionPlayer.center.y) {
                row.forEach((field, fieldIndex) => {
                    if (fieldIndex * Wall.size < positionPlayer.center.x && (fieldIndex + 1) * Wall.size >= positionPlayer.center.x) {

                        coor = {
                            y: lineIndex,
                            x: fieldIndex
                        }
                    }
                })
            }
        });

        this.context.fillText(coor.y + 'x' + coor.x, 10, 30)


        if (this.velocity.x > 0) {
            this.context.fillText('rechts', 10, 20)


            this.context.fillText(Pacman.playground[coor.y][coor.x + 1], 10, 40)

            this.context.fillText(positionPlayer.right + this.velocity.x + '<' + (((coor.x + 1) * Wall.size) + (Wall.size / 2)), 100, 40)
            if (
                Pacman.playground[coor.y][coor.x + 1] === '1'
                && positionPlayer.right + this.velocity.x >= (coor.x + 1) * Wall.size + (Wall.size / 2)
            ) {
                this.velocity.x = 0
            }
        }
        if (this.velocity.x < 0) {
            this.context.fillText('links', 10, 20)

            this.context.fillText(Pacman.playground[coor.y][coor.x - 1], 10, 40)
            this.context.fillText(positionPlayer.left + this.velocity.x + '<' + (((coor.x - 1) * Wall.size) + (Wall.size / 2)), 100, 40)
            if (
                Pacman.playground[coor.y][coor.x - 1] === '1'
                && positionPlayer.left + this.velocity.x <= coor.x * Wall.size - (Wall.size / 2)
            ) {
                this.velocity.x = 0
            }
        }


        if (this.velocity.y < 0) {
            this.context.fillText('oben', 10, 20)
            this.context.fillText(Pacman.playground[coor.y - 1][coor.x], 10, 40)

            if (
                Pacman.playground[coor.y - 1][coor.x] === '1'
                && positionPlayer.top + this.velocity.y <= coor.y * Wall.size - (Wall.size / 2)
            ) {
                this.velocity.y = 0
            }
        }


        if (this.velocity.y > 0) {
            this.context.fillText('unten', 10, 20)
            this.context.fillText(Pacman.playground[coor.y + 1][coor.x], 10, 40)

            if (
                Pacman.playground[coor.y + 1][coor.x] === '1'
                && positionPlayer.bottom + this.velocity.y >= (coor.y + 1) * Wall.size + (Wall.size / 2)
            ) {
                this.velocity.y = 0
            }
        }


        return false;
    }
}
