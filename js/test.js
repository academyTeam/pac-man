/*
var canvas = document.querySelector("#pacman");
var context = canvas.getContext("2d");

var pacman = new Image();
pacman.src ="../sprites/Pac-Man_SNES.gif";
pacman.addEventListener("load", loadImage, false);

var pacman2 = new Image();
pacman2.src ="../sprites/Pac-Man_SNESMirroredHoriz.png";
pacman2.addEventListener("load2", loadImage2, false);

var pacman3 = new Image();
pacman3.src ="../sprites/Pac-Man_SNESMirroredVertik.png";
pacman3.addEventListener("load3", loadImage3, false);

      let pacManX = 200;
      let pacManY = 60;
      const pacManWidth = 16;
      const pacManHeight = 16;


      let frameIndex = 0;
      let frameCount = 4;
      let rowIndex = 0;
      let columnIndex = 0;


      let direction = "Down";

function loadImage(e) {
registerKeys();
  animate();

}
function loadImage2(e) {
registerKeys();
  animate();

}
function loadImage3(e) {
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
var x = 0;
var y = 0;

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



function animate() {





  context.clearRect(120, 25, 300, 300);
  context.drawImage(pacman, column+frameWidth, row+frameHeight, frameWidth, frameHeight,
                                             200, 60, frameWidth, frameHeight);
                                              column += frameWidth + 0;



  switch(direction){

  case "Up":

   context.save();
               context.translate(pacManX + pacManWidth / 2, pacManY + pacManHeight / 2);
               context.rotate(Math.PI / 2);
               context.drawImage(pacman, 0, rowIndex * pacManHeight, pacManWidth, pacManHeight,
                 -pacManWidth / 2, -pacManHeight / 2, pacManWidth, pacManHeight);
               context.restore();

                if (currentFrame == totalFrames) {
                           column = 0;
                           rowIndex = 0;
                           currentFrame = 0;
                       }



    break

  case "Left":

   context.drawImage(pacman, frameIndex * pacManWidth, rowIndex * pacManHeight, pacManWidth, pacManHeight,
                 pacManX, pacManY, pacManWidth, pacManHeight);

                  if (currentFrame == totalFrames) {
                             column = 0;
                             row = 64;
                             currentFrame = 0;
                         }




    break
  case "Down":

//context.drawImage(pacman3, column+frameWidth, row+frameHeight, frameWidth, frameHeight,
  //                                                                  400, 60, frameWidth, frameHeight);
    //                                                                column += frameWidth + 0;
      //

                                                                   //currentFrame++;


                    context.save();
                       context.translate(pacManX + pacManWidth / 2, pacManY + pacManHeight / 2 );
                       context.rotate(-Math.PI / 2);
                       context.drawImage(pacman, 0, rowIndex * pacManHeight, pacManWidth, pacManHeight,
                           -pacManWidth / 2, -pacManHeight / 2, pacManWidth, pacManHeight);
                       context.restore();

                        if (currentFrame == totalFrames) {
                                   column = 64;
                                   row = 0;
                                   currentFrame = 0;
                               }






    break
  case "Right":

   context.drawImage(pacman, frameIndex * pacManWidth, rowIndex * pacManHeight, pacManWidth, pacManHeight,
                    pacManX, pacManY, pacManWidth, pacManHeight);

                     if (currentFrame == totalFrames) {
                                column = 0;
                                row = 64;
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
*/


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
var x = 0;
var y = 0;





function animate() {


  context.clearRect(120, 25, 300, 300);

  //context.fillStyle = '#cccccc'
  //context.fillRect(10, 10, 10, 10);

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




    break
  case "Right":

   scale(pacman)

    break

  }

context.drawImage(pacman, column+frameWidth, row+frameHeight, frameWidth, frameHeight,
                                             100, 60, frameWidth, frameHeight);
                                              column += frameWidth + 0;



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
                   //requestAnimationFrame(animate);



                     break
                 case 'a':
                 case 'ArrowLeft':

                 direction = "Left"
                 //requestAnimationFrame(animate);



                     break
                 case 's':
                 case 'ArrowDown':

                 direction = "Down"
                // requestAnimationFrame(animate);

                     break
                 case 'd':
                 case 'ArrowRight':

                 direction = "Right"
                //requestAnimationFrame(animate);
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
  function scale(pacman){
  const ctx = document.getElementById("pacman").getContext("2d");

    //ctx.restore();
    ctx.save();
    ctx.translate(108, 68); // translate to rectangle center
    //var x = x + 0.5 * width
    //var y = y + 0.5 * height
    ctx.scale(-1,1)// rotate
    ctx.drawImage(pacman, column+frameWidth, row+frameHeight, frameWidth, frameHeight,
                                                     -50, -30, frameWidth, frameHeight);
                                                      column += frameWidth + 0;

    ctx.translate(-108, -68); // translate back
    ctx.restore();



  }










