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
    if(player.x > canvas.width) { player.x += speed; }
    if(player.y < 0) { player.y += speed; }
    if(player.x > canvas.height) { player.y -= speed; }

    render();
    requestAnimationFrame(main);
}

main();