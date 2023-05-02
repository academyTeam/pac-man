export class Wall
{
    static size = 20

    constructor(game, position = {x: 0, y:0, left: 0, top: 0}) {
        this.game = game
        this.position = position
    }

    draw(color) {

        let context = this.game.context

        let positionX = this.position.left + this.position.x
        let positionY = this.position.top + this.position.y


        context.fillStyle = color
        context.strokeStyle = color
        context.fillRect(positionX, positionY, Wall.size, Wall.size)
        context.strokeRect(positionX, positionY, Wall.size, Wall.size)
    }
}
