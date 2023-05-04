import {Wall} from "./Objects/Wall.js";
import {Player} from "./Objects/Player.js";

export class Pacman
{
    debug = false

    static playground = [
            ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", "O", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "O", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "-", "1", "1", "1", "/", "/", "1", "1", "1", "-", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "-", "1", "-", "-", "-", "-", "-", "-", "1", "-", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            [".", ".", ".", ".", ".", ".", ".", ".", ".", "-", "1", "-", "-", "-", "-", "-", "-", "1", "-", ".", ".", ".", ".", ".", ".", ".", ".", "."],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "-", "1", "-", "-", "-", "-", "-", "-", "1", "-", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "-", "1", "1", "1", "1", "1", "1", "1", "1", "-", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", "1"],
            ["1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", ".", "1", "1", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", ".", "1", "1", "1", "1", "1", ".", "1", "1", "1", "1", ".", "1"],
            ["1", "O", ".", ".", "1", "1", ".", ".", ".", ".", ".", ".", ".", "S", "S", ".", ".", ".", ".", ".", ".", ".", "1", "1", ".", ".", "O", "1"],
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
        this.mazeHeight = Pacman.playground.length
        this.mazeWidth = 0

        Pacman.playground.forEach((row, line) => {
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

        Pacman.playground.forEach((row, line) => {
            row.forEach((box, index) => {
                if (box === '1') {

                    let wall = new Wall(this.game, {
                        x: index * Wall.size,
                        y: line * Wall.size,
                        left: this.left,
                        top: this.top
                    })

                    this.checkWallComponment(wall, line, index, row)
                }
            })
        })

        this.player.draw(this.left + 12, this.top + 12)
    }

    checkWallComponment(wall, line, index, row) {

        //it is always the sequence of "Above, Under, Left, Right"
        var stringBuild = this.checkAbove(line, index)
        stringBuild += this.checkUnder(line, index)
        stringBuild += this.checkLeft(line, index)
        stringBuild += this.checkRight(line, index, row)

        // console.log(stringBuild)
        // wall.draw() v= void, f= free, w = wall
        switch(stringBuild) {
            case "vwvw":
                wall.draw(Wall.OUTER_CORNER_LEFT_TOP, Wall.OUTER_TOP_PLAIN, Wall.OUTER_LEFT_PLAIN, Wall.BLANK)
                break
            case "vfww":
                wall.draw(Wall.OUTER_TOP_PLAIN, Wall.OUTER_TOP_PLAIN, Wall.BLANK, Wall.BLANK)
                break
            case "vwww":
                wall.draw(Wall.OUTER_TOP_PLAIN, Wall.OUTER_CORNER_DOWN, Wall.BLANK, Wall.INNER_DOWN_LEFT)
                break
            case "vwwv":
                wall.draw(Wall.OUTER_TOP_PLAIN, Wall.OUTER_CORNER_RIGHT_TOP, Wall.BLANK, Wall.OUTER_RIGHT_PLAIN)
                break
            case "wwfv":
                wall.draw(Wall.BLANK, Wall.OUTER_RIGHT_PLAIN, Wall.BLANK, Wall.OUTER_RIGHT_PLAIN)
                break
            case "wwvf":
                wall.draw(Wall.OUTER_LEFT_PLAIN, Wall.BLANK, Wall.OUTER_LEFT_PLAIN, Wall.BLANK)
                break
            case "wwfw":
                wall.draw(Wall.BLANK, Wall.INNER_DOWN_LEFT, Wall.BLANK, Wall.INNER_DOWN_LEFT)
                break
            case "wwwf":
                wall.draw(Wall.INNER_DOWN_RIGHT, Wall.BLANK, Wall.INNER_DOWN_RIGHT, Wall.BLANK)
                break
            case "wwww":
                wall.draw(Wall.BLANK, Wall.BLANK, Wall.BLANK, Wall.BLANK)
                break
            case "fwww":
                wall.draw(Wall.BLANK, Wall.BLANK, Wall.INNER_TOP_PLAIN, Wall.INNER_TOP_PLAIN)
                break
            case "wfww":
                wall.draw(Wall.INNER_TOP_PLAIN, Wall.INNER_TOP_PLAIN, Wall.BLANK, Wall.BLANK)
                break
            case "fwfw":
                wall.draw(Wall.BLANK, Wall.BLANK, Wall.BLANK, Wall.INNER_CORNER_RIGHT_TOP)
                break
            case "wffw":
                wall.draw(Wall.BLANK, Wall.INNER_CORNER_RIGHT_DOWN, Wall.BLANK, Wall.BLANK)
                break
            case "fwwf":
                wall.draw(Wall.BLANK, Wall.BLANK, Wall.INNER_CORNER_LEFT_TOP, Wall.BLANK)
                break
            case "wfwf":
                wall.draw(Wall.INNER_CORNER_LEFT_DOWN, Wall.BLANK, Wall.BLANK, Wall.BLANK)
                break
            case "fvww":
                wall.draw(Wall.BLANK, Wall.BLANK, Wall.OUTER_DOWN_PLAIN, Wall.OUTER_DOWN_PLAIN)
                break
            case "wvvw":
                wall.draw(Wall.OUTER_LEFT_PLAIN, Wall.BLANK, Wall.OUTER_CORNER_RIGHT_DOWN, Wall.OUTER_DOWN_PLAIN)
                break
            case "wvwv":
                wall.draw(Wall.BLANK, Wall.OUTER_RIGHT_PLAIN, Wall.OUTER_DOWN_PLAIN, Wall.OUTER_CORNER_LEFT_DOWN)
                break
            case "f":
                wall.draw()
                break
            default:
                wall.draw(Wall.OUTER_CORNER_LEFT_TOP, Wall.OUTER_TOP_PLAIN, Wall.OUTER_TOP_PLAIN, Wall.OUTER_CORNER_LEFT_TOP)
        }

    }

    checkAbove(line, index) {
        var getLineAbove = line - 1

        if(getLineAbove < 0) {
            return "v"
        }else if(Pacman.playground[getLineAbove][index] == "1") {
            return "w"
        }
        return "f"

    }

    checkUnder(line, index) {
        var getLineUnder = line + 1

        if(getLineUnder >= this.mazeHeight) {
            return "v"
        }else if(Pacman.playground[getLineUnder][index] == "1") {
            return "w"
        }
        return "f"
    }

    checkLeft(line, index) {
        var getIndexLeft = index - 1

        if(getIndexLeft < 0) {
            return "v"
        }else if(Pacman.playground[line][getIndexLeft] == "1") {
            return "w"
        }
        return "f"

    }

    checkRight(line, index, row) {
        var getIndexRight = index + 1

        if(getIndexRight >= row.length) {
            return "v"
        }else if(Pacman.playground[line][getIndexRight] == "1") {
            return "w"
        }
        return "f"
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
