export class Wall
{
    static size = 16

    constructor(position = {x: 0, y:0}) {
        this.position = position
    }

    draw(context) {
        context.fillStyle = '#CCCCCC'
        context.fillRect(this.position.x,this.position.y, Wall.size, Wall.size)

        context.fillStyle = '#000000'
        context.fillRect(this.position.x+1, this.position.y+1, Wall.size-2, Wall.size-2)
    }
}
