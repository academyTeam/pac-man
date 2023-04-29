const canvas = document.getElementById('pacman')
const c = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

var stop = false;
var frameCount = 0;
let framesLast = 0
let seconds = 0
var fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    seconds = Math.ceil(Date.now()/1000)
    animate();
}

function animate()
{
    window.requestAnimationFrame(animate)

    now = Date.now();
    elapsed = now - then;


    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);
        if (seconds < Math.ceil(Date.now()/1000))
        {
            framesLast = frameCount
            frameCount = 0;
            seconds = Math.ceil(Date.now()/1000)
        }

        c.reset()
        // Put your drawing code here
        c.fillStyle = '#000000'
        c.fillRect(0,0, canvas.width, canvas.height)


        c.fillStyle = '#FFFFFF'
        c.font = "bold 48px serif";
        c.fillText(framesLast + 'fps', 50, 100);

        frameCount++
        console.log(fpsInterval)
    }

}

startAnimating(15)