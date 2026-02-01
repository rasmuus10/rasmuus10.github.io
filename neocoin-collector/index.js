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

const speed = 6;
const player = new Object(10, 10, 48, 48);
const neocoin = new Object(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 25, 25);
let newNeocoin = localStorage.getItem("neocoin");
document.getElementById("display-text").textContent = `neocoins: ${localStorage.getItem("neocoin")}`;

let keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function isCollidingX(x1, w1, x2, w2) { return x1 < x2 + w2 && x1 + w1 > x2; }
function isCollidingY(y1, h1, y2, h2) { return y1 < y2 + h2 && y1 + h1 > y2; }

function render() {
    ctx.fillStyle = "aquamarine";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = "navy";
    ctx.fillRect(neocoin.x, neocoin.y, neocoin.width, neocoin.height);
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(keys["w"]) { player.y -= speed; }
    if(keys["s"]) { player.y += speed; }
    if(keys["a"]) { player.x -= speed; }
    if(keys["d"]) { player.x += speed; }

    if(player.x < 0) { player.x += speed; }
    if(player.x > canvas.width - player.width) { player.x -= speed; }
    if(player.y < 0) { player.y += speed; }
    if(player.y > canvas.height - player.height) { player.y -= speed; }

    if(
        isCollidingX(player.x, player.width, neocoin.x, neocoin.width) &&
        isCollidingY(player.y, player.height, neocoin.y, neocoin.height)
    ) {
        neocoin.x = Math.floor(Math.random() * canvas.width) - 25;
        neocoin.y = Math.floor(Math.random() * canvas.height) - 25;
        newNeocoin++;
        localStorage.setItem("neocoin", newNeocoin);
        document.getElementById("display-text").textContent = `neocoins: ${localStorage.getItem("neocoin")}`;
    }

    render();
    requestAnimationFrame(game);
}

game();