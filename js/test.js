var canvas = document.querySelector("#pacman");
var context = canvas.getContext("2d");

var pacman = new Image();
pacman.src ="../sprites/Pac-Man_SNES.gif";
pacman.addEventListener("load", loadImage, false);

function loadImage(e) {
  animate();
}

var shift = 0;
var frameWidth =16
var frameHeight =16;
var totalFrames = 4;
var currentFrame = 0;
var row = 1;
var column = 0;
var counter = 0;
function animate() {

  context.clearRect(120, 25, 300, 300);

  context.drawImage(pacman, column*frameWidth, row*frameHeight, frameWidth, frameHeight,
                                          200, 60, frameWidth, frameHeight);


      counter++;
      console.log


      column += frameWidth + 0;

        if (currentFrame == totalFrames) {
            column = 0;
            currentFrame = 0;
        }

      currentFrame++;

      requestAnimationFrame(animate);
}