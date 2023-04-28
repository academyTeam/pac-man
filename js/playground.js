
function myPlaygroundTest() {
    console.log([
        ["1", "1", "1"],
        ["1", "1"],
        ["1", "1", "1", "1"],
        ["1"]
    ]);
}

function createPlayground() {
    var playground = [
        ["1", "1", "1"],
        ["1", "1"],
        ["1", "1", "1", "1"],
        ["1"]
    ];
    // playground.forEach(line => line.forEach(block => ));
}

let myPlayground = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
]

const canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext('2d');
// c.fillRect(100, 100, 100, 100)

const xStart = 50;
const w = 50;
const h = 50;
const increment = 51;

let x = 50;
let y = 50;

myPlayground.forEach((row) => drawRow(row));

function drawRow(arr) {
    arr.forEach((block) => {
        c.fillRect(x, y, w, h);
        x = x + increment;
    })
    y = y + increment;
    x = xStart;
}

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement?retiredLocale=de
