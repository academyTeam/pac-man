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
    lastKey = ''
    spritePerFrames = 0
    speed = 4
    playerWidth = 32
    playerHeight = 32
    imageCache = {}


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
        this.context = this.game.canvasPlayer.getContext("2d")
        this.contextGame = this.game.canvas.getContext('2d')

        this.registerKeys()

       // this.drawMrPacman()
    }

    draw (startPositionX, startPositionY) {

        if (this.position.x === -99) {
            this.position.x = startPositionX
        }
        if (this.position.y === -99) {
            this.position.y = startPositionY
        }

        switch (this.lastKey) {
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

        this.checkCollision()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.contextGame.strokeStyle = '#CCCCCC'
        this.contextGame.FillStyle = '#FFFFFF'

        if (this.velocity.y < 0) {
            this.contextGame.fillStyle = '#FFFFFF'
            this.contextGame.fillText('W', 200, 25)
        } else {
            this.contextGame.fillStyle = '#999999'

            if (this.lastKey === 'w') {
                this.contextGame.fillStyle = '#FF0000'
            }

            this.contextGame.fillText('W', 200, 25)
        }

        if (this.velocity.x < 0) {
            this.contextGame.fillStyle = '#FFFFFF'
            this.contextGame.fillText('A', 190, 35)
        } else {
            this.contextGame.fillStyle = '#999999'

            if (this.lastKey === 'a') {
                this.contextGame.fillStyle = '#FF0000'
            }

            this.contextGame.fillText('A', 190, 35)
        }

        if (this.velocity.x > 0) {
            this.contextGame.fillStyle = '#FFFFFF'
            this.contextGame.fillText('D', 210, 35)
        } else {
            this.contextGame.fillStyle = '#999999'
            if (this.lastKey === 'd') {
                this.contextGame.fillStyle = '#FF0000'
            }
            this.contextGame.fillText('D', 210, 35)
        }

        if (this.velocity.y > 0) {
            this.contextGame.fillStyle = '#FFFFFF'
            this.contextGame.fillText('S', 200, 45)
        } else {
            this.contextGame.fillStyle = '#999999'
            if (this.lastKey === 's') {
                this.contextGame.fillStyle = '#FF0000'
            }
            this.contextGame.fillText('S', 200, 45)
        }


        this.context.imageSmoothingEnabled = false;

        let imageData = this.imageCache[this.shift]
        if (imageData === undefined) {
            const playerImage = this.game.spriteManager.getSpriteTile("../../../sprites/Pac-Man_SNES.gif")
            this.context.drawImage(playerImage, this.shift, 0, this.frameWidth, this.frameHeight,
                this.position.x, this.position.y, this.playerWidth, this.playerHeight);

            // add transparency to sprites
            imageData = this.context.getImageData(this.position.x, this.position.y, this.playerWidth, this.playerHeight);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                // if the pixel matches our transparent color, set alpha to 0
                if(data[i] === 128 && data[i + 1] === 0 && data[i + 2] === 128) {
                    data[i+3] = 0;
                }
            }
            this.imageCache[this.shift] = imageData
        }
        this.context.putImageData(imageData, this.position.x, this.position.y);

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
        this.shift = 0;
        this.frameWidth = 16;
        this.frameHeight = 16;
        this.startFrame = 0;
        this.totalFrames = 5;
        this.typeFrame = 16;
    }


    drawMrPacman() {
        this.shift = 0;
        this.frameWidth = 16;
        this.frameHeight = 16;
        this.startFrame = 0;
        this.totalFrames = 5;
        this.typeFrame = 16;
    }

    drawMrsPacmanUp() {
        this.shift = 0;
        this.frameWidth = 16;
        this.frameHeight = 16;
        this.startFrame = 6;
        this.totalFrames = 5;
        this.typeFrame = 0;
    }

    registerKeys() {
        addEventListener('keydown', ({key}) => {
            switch (key) {
                case 'w':
                case 'ArrowUp':
                    this.velocity.y = -this.speed
                    this.lastKey = 'w'
                    break
                case 'a':
                case 'ArrowLeft':
                    this.velocity.x = -this.speed
                    this.lastKey = 'a'
                    break
                case 's':
                case 'ArrowDown':
                    this.velocity.y = this.speed
                    this.lastKey = 's'
                    break
                case 'd':
                case 'ArrowRight':
                    this.velocity.x = this.speed
                    this.lastKey = 'd'
                    break
            }
        });


        // addEventListener('keyup', ({key}) => {
        //     switch (key) {
        //         case 'w':
        //         case 'ArrowUp':
        //             this.velocity.y = 0
        //             break
        //         case 'a':
        //         case 'ArrowLeft':
        //             this.velocity.x = 0
        //             break
        //         case 's':
        //         case 'ArrowDown':
        //             this.velocity.y = 0
        //             break
        //         case 'd':
        //         case 'ArrowRight':
        //             this.velocity.x = 0
        //             break
        //     }
        // });
    }

    checkCollision() {

        let tolerance = -4

        let positionPlayer = {
            center: {
                x: this.position.x + this.playerWidth / 2,
                y: this.position.y + this.playerHeight / 2
            },

            left: this.position.x - tolerance,
            right: this.position.x + this.playerWidth + tolerance,
            top: this.position.y - tolerance,
            bottom: this.position.y + this.playerHeight + tolerance
        }

        this.contextGame.fillStyle = '#FFFFFF'
        let coor = {
            x: 0,
            y: 0
        }
        this.contextGame.fillText(positionPlayer.top + 'x' + positionPlayer.left, 10, 10)

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

        if (!this.game.game.playerWasHere.includes(coor.x + 'x' + coor.y)) {
            this.game.game.playerWasHere.push(coor.x + 'x' + coor.y)
        }

        this.contextGame.fillText(coor.x + 'x' + coor.y, 10, 30)


        if (this.velocity.x > 0) {

            this.contextGame.fillText(Pacman.playground[coor.y][coor.x + 1], 10, 40)

            this.contextGame.fillText(positionPlayer.right + this.velocity.x + '<' + (((coor.x + 1) * Wall.size) + (Wall.size / 2)), 100, 40)
            if (
                Pacman.playground[coor.y][coor.x + 1] === '1'
                && positionPlayer.right + this.velocity.x >= (coor.x + 1) * Wall.size + (Wall.size / 2)
            ) {
                this.velocity.x = 0
            }
        }
        if (this.velocity.x < 0) {
            this.contextGame.fillText(Pacman.playground[coor.y][coor.x - 1], 10, 40)
            this.contextGame.fillText(positionPlayer.left + this.velocity.x + '<' + (((coor.x - 1) * Wall.size) + (Wall.size / 2)), 100, 40)
            if (
                Pacman.playground[coor.y][coor.x - 1] === '1'
                && positionPlayer.left + this.velocity.x <= coor.x * Wall.size - (Wall.size / 2)
            ) {
                this.velocity.x = 0
            }
        }


        if (this.velocity.y < 0) {
            this.contextGame.fillText(Pacman.playground[coor.y - 1][coor.x], 10, 40)

            if (
                Pacman.playground[coor.y - 1][coor.x] === '1'
                && positionPlayer.top + this.velocity.y <= coor.y * Wall.size - (Wall.size / 2)
            ) {
                this.velocity.y = 0
            }
        }


        if (this.velocity.y > 0) {
            this.contextGame.fillText(Pacman.playground[coor.y + 1][coor.x], 10, 40)

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
