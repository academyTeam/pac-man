export class Wall
{
    static size = 20

    static OUTER_CORNER_LEFT = {
        x: 762,
        y: 293
    }

    constructor(game, position = {x: 0, y:0, left: 0, top: 0}) {
        this.game = game
        this.position = position
    }

    draw(wallType1, wallType2, wallType3, wallType4 ) {



        let context = this.game.context

        let positionX = this.position.left + this.position.x
        let positionY = this.position.top + this.position.y


        var img1 = new Image()
        img1.src="../../sprites/pacman_tiles.png"

        context.imageSmoothingEnabled = false
        context.drawImage(img1, wallType1.x, wallType1.y, 8, 8, positionX, positionY, 8, 8)
        context.drawImage(img1, 843, 293, 8, 8, positionX + 8, positionY, 8, 8)
        context.drawImage(img1, 780, 293, 8, 8, positionX, positionY + 8, 8, 8)
        context.drawImage(img1, 712, 293, 8, 8, positionX + 8, positionY + 8, 8, 8)
        // context.strokeStyle = color
        // context.fillRect(positionX, positionY, Wall.size, Wall.size)
        // context.strokeRect(positionX, positionY, Wall.size, Wall.size)
    }
}
