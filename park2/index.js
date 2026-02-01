const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Object {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

const player = new Object(10, 10, 50, 50);
const speed = 12;

function render() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

let i = 0;

let plant = new Object(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 25, 25);

const drawPlant = setInterval(function() {
    i++;
    if(i == 100) { clearInterval(drawPlant); }
    plant = new Object(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 25, 25);
    ctx.fillStyle = "green";
    ctx.fillRect(plant.x, plant.y, plant.width, plant.height);
}, 1);

function isCollidingX(x1, w1, x2, w2) { return x1 < x2 + w2 && x1 + w1 > x2; }
function isCollidingY(y1, h1, y2, h2) { return y1 < y2 + h2 && y1 + h1 > y2; }

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function main() {
    ctx.clearRect(player.x, player.y, player.width, player.height);

    if(keys["w"]) { player.y -= speed; }
    if(keys["s"]) { player.y += speed; }
    if(keys["a"]) { player.x -= speed; }
    if(keys["d"]) { player.x += speed; }

    if(player.x < 0) { player.x += speed; }
    if(player.x > canvas.width - player.width) { player.x -= speed; }
    if(player.y < 0) { player.y += speed; }
    if(player.y > canvas.height - player.height) { player.y -= speed; }

    if(
        isCollidingX(player.x, player.width, plant.x, plant.width) &&
        isCollidingY(player.y, player.height, plant.y, plant.height)
    ) {
        alert("test");
    }

    render();
    requestAnimationFrame(main);
}

main();