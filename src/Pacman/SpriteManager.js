export class SpriteManager
{
    spriteCache = {}

    getTile = (fileName, position = {x: 0, y: 0}, size= {width: 0, height: 0}, shift) => {
        const spriteTile = this.getSpriteTile(fileName)
    }

    getSpriteTile(fileName) {

        if (this.spriteCache[fileName] === undefined) {
            let image = new Image()
            image.src = fileName
            this.spriteCache[fileName] = image
        }

        return this.spriteCache[fileName]
    }
}