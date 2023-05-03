export class Wall
{
    static size = 20

    static OUTER_CORNER_LEFT_TOP = {x: 762, y: 293}
    static OUTER_CORNER_RIGHT_TOP = {x: 753, y: 293}
    static OUTER_CORNER_RIGHT_DOWN = {x: 798, y: 293}
    static OUTER_CORNER_LEFT_DOWN = {x: 789, y: 293}
    static OUTER_CORNER_DOWN = {x: 852, y: 311}
    static OUTER_TOP_PLAIN = {x: 852, y: 293}
    static OUTER_DOWN_PLAIN = {x: 870, y: 293}
    static OUTER_LEFT_PLAIN = {x: 780, y: 293}
    static OUTER_RIGHT_PLAIN = {x: 771, y: 293}
    static INNER_TOP_PLAIN = {x: 879, y: 293}
    static INNER_DOWN_LEFT = {x: 834, y: 302}
    static INNER_DOWN_RIGHT = {x: 825, y: 302}
    static INNER_CORNER_RIGHT_TOP = {x: 816, y: 302}
    static INNER_CORNER_RIGHT_DOWN = {x: 852, y: 302}
    static INNER_CORNER_LEFT_TOP = {x: 807, y: 302}
    static INNER_CORNER_LEFT_DOWN = {x: 843, y: 302}
    static BLANK = {x: 710, y: 293}



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
        context.drawImage(img1, wallType2.x, wallType2.y, 8, 8, positionX + 8, positionY, 8, 8)
        context.drawImage(img1, wallType3.x, wallType3.y, 8, 8, positionX, positionY + 8, 8, 8)
        context.drawImage(img1, wallType4.x, wallType4.y, 8, 8, positionX + 8, positionY + 8, 8, 8)
        // context.strokeStyle = color
        // context.fillRect(positionX, positionY, Wall.size, Wall.size)
        // context.strokeRect(positionX, positionY, Wall.size, Wall.size)
    }
}
