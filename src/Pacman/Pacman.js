import {Wall} from "./Objects/Wall.js";
import {Player} from "./Objects/Player.js";

export class Pacman
{
    debug = true

    static top = 0
    static left = 0
    backgroundCache = undefined
    mapCache = undefined

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

    async animate() {

        let canvas = this.game.canvas
        let context = this.game.context

        Pacman.left = canvas.width / 2 - (this.mazeWidth * Wall.size / 2)
        Pacman.top = canvas.height / 2 - (this.mazeHeight * Wall.size / 2)

        if (Pacman.top < 0) Pacman.top = 0
        if (Pacman.left < 0) Pacman.left = 0


        this.game.canvasMap.style.top = Pacman.top + 'px'
        this.game.canvasMap.style.left = Pacman.left + 'px'
        this.game.canvasMap.style.position = 'absolute'

        this.game.canvasMap.width = this.mazeWidth * Wall.size
        this.game.canvasMap.height = this.mazeHeight * Wall.size

        let contextMap = this.game.canvasMap.getContext('2d')

        if (this.backgroundCache === undefined) {
            this.mazeBackground(canvas)
            this.backgroundCache = context.getImageData(Pacman.left, Pacman.top, (Pacman.left + this.mazeWidth * Wall.size), (Pacman.top + this.mazeHeight * Wall.size))
        }

        if (this.backgroundCache !== undefined) {
            context.putImageData(this.backgroundCache, Pacman.left, Pacman.top);
        }

        if (this.mapCache === undefined) {


            Pacman.playground.forEach((row, line) => {
                row.forEach((box, index) => {
                    if (box === '1') {

                        let wall = new Wall(this.game, {
                            x: index * Wall.size,
                            y: line * Wall.size
                        })

                        this.checkWallComponment(wall, line, index, row)
                    }
                })
            })


            // add transparency to sprites

            let imageData = contextMap.getImageData(0, 0, (Pacman.left + this.mazeWidth * Wall.size), (Pacman.top + this.mazeHeight * Wall.size));
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                 // if the pixel matches our transparent color, set alpha to 0
                 if(data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) {
                     data[i+3] = 0;
                 }
            }
            this.mapCache = imageData
        }

        if (this.mapCache !== undefined) {

            contextMap.putImageData(this.mapCache, 0, 0);
        }

        this.player.draw(Pacman.left + 8, Pacman.top + 8)
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

    mazeBackground() {

        let context = this.game.context

        for (let line = 0; line < this.mazeHeight; line++) {
            for (let row = 0; row < this.mazeWidth; row++) {
                if ((line + row) % 2) {
                    context.fillStyle = "rgba(26, 26, 26)"
                } else {
                    context.fillStyle = "rgba(15, 15, 15)"
                }

                context.strokeStyle = context.fillStyle

                let positionX = Pacman.left + row * Wall.size
                let positionY = Pacman.top + line * Wall.size

                context.fillRect(positionX, positionY, Wall.size, Wall.size)
                context.strokeRect(positionX, positionY, Wall.size, Wall.size)
            }
        }
    }

    animateDebug(canvas) {

        let color = '#999999'

        let context = this.game.context


        let gradTop = context.createLinearGradient(0, Pacman.top - (4 * Wall.size), 0, Pacman.top);

        gradTop.addColorStop(0, "#000000");
        gradTop.addColorStop(1, color);


        let gradBottom = context.createLinearGradient(0, Pacman.top + (this.mazeWidth * Wall.size), 0, Pacman.top + (this.mazeWidth * Wall.size) + (4*Wall.size));

        gradBottom.addColorStop(0, color);
        gradBottom.addColorStop(1, "#000000");


        let gradLeft = context.createLinearGradient(Pacman.left - (4 * Wall.size), 0, Pacman.left, 0);

        gradLeft.addColorStop(0, "#000000");
        gradLeft.addColorStop(1, color);


        let gradRight = context.createLinearGradient(Pacman.left + (this.mazeWidth * Wall.size), 0, Pacman.left + (this.mazeWidth * Wall.size) + (4 * Wall.size), 0);

        gradRight.addColorStop(0, color);
        gradRight.addColorStop(1, "#000000");


        for (let x = 0; x <= this.mazeHeight; x++) {

            this.strokeLine(
                context,
                gradLeft,
                Pacman.left - (4 * Wall.size),
                Pacman.top + (x * Wall.size),
                Pacman.left,
                Pacman.top + (x * Wall.size)
            )

            this.strokeLine(
                context,
                color,
                Pacman.left,
                Pacman.top + (x * Wall.size),
                Pacman.left + (this.mazeWidth * Wall.size),
                Pacman.top + (x * Wall.size)
            )

            this.strokeLine(
                context,
                gradRight,
                Pacman.left + (this.mazeWidth * Wall.size),
                Pacman.top + (x * Wall.size),
                Pacman.left + (this.mazeWidth * Wall.size) + (4 * Wall.size),
                Pacman.top + (x * Wall.size)
            )
        }

        for (let x = 0; x <= this.mazeWidth; x++) {

            this.strokeLine(
                context,
                gradTop,
                Pacman.left + (x * Wall.size),
                Pacman.top - (4 * Wall.size),
                Pacman.left + (x * Wall.size),
                Pacman.top
            )

            this.strokeLine(
                context,
                color,
                Pacman.left + (x * Wall.size),
                Pacman.top,
                Pacman.left + (x * Wall.size),
                Pacman.top + (this.mazeHeight * Wall.size)
            )


            this.strokeLine(
                context,
                gradBottom,
                Pacman.left + (x * Wall.size),
                Pacman.top + (this.mazeHeight * Wall.size),
                Pacman.left + (x * Wall.size),
                Pacman.top + (this.mazeHeight * Wall.size) + (4 * Wall.size)
            )
        }

        context.fillStyle = '#FFFFFF'
        context.font = "10px serif"
        context.fillText(this.mazeWidth + 'x' + this.mazeHeight, Pacman.left - (2 * Wall.size), Pacman.top - (1 * Wall.size))
    }

    strokeLine(context, strokeColor, startX, startY, endX, endY) {

        context.strokeStyle = strokeColor;

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }
}
