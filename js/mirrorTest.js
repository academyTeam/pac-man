var canvas = document.querySelector("#c");
var context2D = canvas.getContext("2d");

var metaData = [
    {x:0,y:0,w:35,h:38,offsetX:3,offsetY:9},
    {x:37,y:0,w:31,h:37,offsetX:6,offsetY:10},
    {x:70,y:0,w:65,h:47,offsetX:0,offsetY:1},
    {x:137,y:0,w:65,h:47,offsetX:0,offsetY:1},
    {x:204,y:0,w:61,h:46,offsetX:1,offsetY:1},
    {x:267,y:0,w:42,h:46,offsetX:1,offsetY:1},
    {x:311,y:0,w:43,h:44,offsetX:1,offsetY:3},
    {x:356,y:0,w:38,h:37,offsetX:6,offsetY:10},
    {x:396,y:0,w:35,h:34,offsetX:6,offsetY:13},
    {x:433,y:0,w:33,h:37,offsetX:7,offsetY:10},
    {x:468,y:0,w:36,h:40,offsetX:5,offsetY:7},
    {x:506,y:0,w:34,h:39,offsetX:6,offsetY:8}
],
dx = 0, //position x
dy = 0, //position y
index = 0; //frame index

(function draw() {
    context2D.clearRect(0,0,c.width,c.height);

    var cur = metaData[index];

    if(facingRight) {
        context2D.drawImage(
            img,
            cur.x, cur.y,
            cur.w, cur.h,
            dx + cur.offsetX, dy + cur.offsetY,
            cur.w, cur.h
        );
    } else {
        context2D.save();
        context2D.scale(-1,1);
        context2D.drawImage(
            img,
            cur.x, cur.y,
            cur.w, cur.h,
            -dx - cur.offsetX - cur.w, dy + cur.offsetY,
            cur.w, cur.h
        );
        context2D.restore();
    }

    index = ++index % metaData.length;

    setTimeout(draw,100);
})();