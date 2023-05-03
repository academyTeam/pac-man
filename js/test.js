var canvas = document.querySelector("#pacman");
var context = canvas.getContext("2d");

var pacman = new Image();
pacman.src ="../sprites/Pac-Man_SNES.gif";
pacman.addEventListener("load", loadImage, false);

function loadImage(e) {
registerKeys();
  animate();

}

var shift = 0;
var frameWidth =16
var frameHeight =16;
var totalFrames = 4;
var currentFrame = 0;
var row = 0;
var column = 0;
var direction = 0;





function animate() {


  context.clearRect(120, 25, 300, 300);
  context.drawImage(pacman, column+frameWidth, row+frameHeight, frameWidth, frameHeight,
                                           200, 60, frameWidth, frameHeight);
                                            column += frameWidth + 0;

  switch(direction){

  case "Up":

   if (currentFrame == totalFrames) {
              column = 64;
              row = 0;
              currentFrame = 0;
          }

    break

  case "Left":

   if (currentFrame == totalFrames) {
              column = 0;
              row = 0;
              currentFrame = 0;
          }

    break
  case "Down":

  // direction.rotate(90*)

    break
  case "Right":

   if (currentFrame == totalFrames) {
              column = 0;
              row = 0;
              currentFrame = 0;
          }

    break

  }





        if (currentFrame == totalFrames) {
            column = 0;
            row = 0;
            currentFrame = 0;
        }

      currentFrame++;


console.log(direction);

      requestAnimationFrame(animate);


}

  function registerKeys(){
         addEventListener('keydown', ({key}) => {
             switch (key) {
                 case 'w':
                 case 'ArrowUp':

                   direction = "Up"



                     break
                 case 'a':
                 case 'ArrowLeft':

                 direction = "Left"



                     break
                 case 's':
                 case 'ArrowDown':

                 direction = "Down"

                     break
                 case 'd':
                 case 'ArrowRight':

                 direction = "Right"

                     break
             }
         });


         addEventListener('keyup', ({key}) => {
             switch (key) {
                 case 'w':
                 case 'ArrowUp':


                     break
                 case 'a':
                 case 'ArrowLeft':


                     break
                 case 's':
                 case 'ArrowDown':

                 case 'd':
                 case 'ArrowRight':

                     break
             }
         });
  }


