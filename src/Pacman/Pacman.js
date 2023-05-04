import {Wall} from "./Objects/Wall.js";
import {Player} from "./Objects/Player.js";

export class Pacman
{
    debug = false

    playground = [
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", ".", ".", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "-", "-", "-", "-", "-", "-", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1", "-", "-", "-", "-", "-", "-", "1", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "-", "-", "-", "-", "-", "-", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", "S", "S", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", "1"],
            ["1", "1", "1", ".", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", ".", "1", "1", "1"],
            ["1", "1", "1", ".", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", ".", "1", "1", "1"],
            ["1", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", "1"],
            ["1", ".", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1"],
            ["1", ".", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1"],
            ["1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ];

    constructor(game) {
        this.game = game
        this.mazeHeight = this.playground.length
        this.mazeWidth = 0

        this.playground.forEach((row, line) => {
            if (this.mazeWidth < row.length) {
                this.mazeWidth = row.length
            }
        })

        this.player = new Player(game)
    }

    animate() {

        let canvas = this.game.canvas

        let context = canvas.getContext('2d')

        this.left = canvas.width / 2 - (this.mazeWidth * Wall.size / 2)
        this.top = canvas.height / 2 - (this.mazeHeight * Wall.size / 2)

        if (this.top < 0) this.top = 0
        if (this.left < 0) this.left = 0

        this.mazeBackground(canvas)

        this.playground.forEach((row, line) => {
            row.forEach((box, index) => {
                if (box === '1') {

                    let wall = new Wall(this.game, {
                        x: index * Wall.size,
                        y: line * Wall.size,
                        left: this.left,
                        top: this.top
                    })
                    wall.draw("rgba(51, 51, 204, 0.7)")
                }
            })
        })

        this.player.draw(this.left + 12, this.top + 12)
    }

    mazeBackground(canvas) {

        let context = canvas.getContext('2d')
        let color = '#999999'



        for (let line = 0; line < this.mazeHeight; line++) {
            for (let row = 0; row < this.mazeWidth; row++) {
                if ((line + row) % 2) {
                    context.fillStyle = "rgba(26, 26, 26)"
                } else {
                    context.fillStyle = "rgba(15, 15, 15)"
                }

                context.strokeStyle = context.fillStyle

                let positionX = this.left + row * Wall.size
                let positionY = this.top + line * Wall.size

                context.fillRect(positionX, positionY, Wall.size, Wall.size)
                context.strokeRect(positionX, positionY, Wall.size, Wall.size)
            }
        }
    }

    animateDebug(canvas) {

        let color = '#999999'

        let context = canvas.getContext('2d')


        let gradTop = context.createLinearGradient(0, this.top - (4 * Wall.size), 0, this.top);

        gradTop.addColorStop(0, "#000000");
        gradTop.addColorStop(1, color);


        let gradBottom = context.createLinearGradient(0, this.top + (this.mazeWidth * Wall.size), 0, this.top + (this.mazeWidth * Wall.size) + (4*Wall.size));

        gradBottom.addColorStop(0, color);
        gradBottom.addColorStop(1, "#000000");


        let gradLeft = context.createLinearGradient(this.left - (4 * Wall.size), 0, this.left, 0);

        gradLeft.addColorStop(0, "#000000");
        gradLeft.addColorStop(1, color);


        let gradRight = context.createLinearGradient(this.left + (this.mazeWidth * Wall.size), 0, this.left + (this.mazeWidth * Wall.size) + (4 * Wall.size), 0);

        gradRight.addColorStop(0, color);
        gradRight.addColorStop(1, "#000000");


        for (let x = 0; x <= this.mazeHeight; x++) {

            this.strokeLine(
                context,
                gradLeft,
                this.left - (4 * Wall.size),
                this.top + (x * Wall.size),
                this.left,
                this.top + (x * Wall.size)
            )

            this.strokeLine(
                context,
                color,
                this.left,
                this.top + (x * Wall.size),
                this.left + (this.mazeWidth * Wall.size),
                this.top + (x * Wall.size)
            )

            this.strokeLine(
                context,
                gradRight,
                this.left + (this.mazeWidth * Wall.size),
                this.top + (x * Wall.size),
                this.left + (this.mazeWidth * Wall.size) + (4 * Wall.size),
                this.top + (x * Wall.size)
            )
        }

        for (let x = 0; x <= this.mazeWidth; x++) {

            this.strokeLine(
                context,
                gradTop,
                this.left + (x * Wall.size),
                this.top - (4 * Wall.size),
                this.left + (x * Wall.size),
                this.top
            )

            this.strokeLine(
                context,
                color,
                this.left + (x * Wall.size),
                this.top,
                this.left + (x * Wall.size),
                this.top + (this.mazeHeight * Wall.size)
            )


            this.strokeLine(
                context,
                gradBottom,
                this.left + (x * Wall.size),
                this.top + (this.mazeHeight * Wall.size),
                this.left + (x * Wall.size),
                this.top + (this.mazeHeight * Wall.size) + (4 * Wall.size)
            )
        }

        context.fillStyle = '#FFFFFF'
        context.font = "10px serif"
        context.fillText(this.mazeWidth + 'x' + this.mazeHeight, this.left - (2 * Wall.size), this.top - (1 * Wall.size))
    }

    strokeLine(context, strokeColor, startX, startY, endX, endY) {

        context.strokeStyle = strokeColor;

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }
}
