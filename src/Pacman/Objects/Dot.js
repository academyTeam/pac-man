export class Dot
{
    constructor(game, position = {x: 0, y:0}) {
        this.game = game
        this.position = position
    }

    draw() {

        let context = this.game.canvasMap.getContext('2d')

        //
        context.fillStyle = '#f69f07'
        // // context.fillRect(positionX, positionY, Wall.size, Wall.size)
        context.fillRect(this.position.x, this.position.y, 2, 2)
    }
}
