document.getElementById("changelog").onclick = function() { // open changelog
    on('log');
    on('cover');
    document.getElementById('cover').onclick = function() { // click anywhere to close it
        off('log');
        off('cover');
    }
}

const bgInput = document.getElementById("bg-input");

const rainbow = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo"
];

bgInput.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        if(bgInput.value.toLowerCase() == "rainbow") {
            setInterval(function () {
                document.body.style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
            }, 50);
        }
        document.body.style.backgroundColor = bgInput.value;
    }
});


function on(id) { document.getElementById(id).style.display = "block"; } // show stuff
function off(id) { document.getElementById(id).style.display = "none"; } // hide stuff

function isMobile() { return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent); } // what do you think this does?

if (isMobile()) { // js mobile optimization :sob:
   document.getElementById("titlePre").innerHTML = `<div style="text-align: center;"><h1 style="font-size: 5rem;text-align:center;">NEOCORAL</h1></div>`;
   document.getElementById("main").style.width = "fit-content";
   document.getElementById("pre-dude").style.marginTop = "-2%";
   document.getElementById("pre-dude").style.marginLeft = "-6%";
   document.getElementById("pre-dude2").style.marginTop = "-2%";
   document.getElementById("phone1").src = "";
   document.getElementById("phone2").src = "";
   document.getElementById("phone3").src = "";
   document.getElementById("log").style.width = "fit-content";
   document.getElementById("unlistedProjects").style.width = "fit-content";
}

document.getElementById("neocoins").innerHTML = localStorage.getItem("neocoin");
document.getElementById("stonk").innerHTML = localStorage.getItem("stonk");
document.getElementById("time").innerHTML = localStorage.getItem("time");

let time = 0;
time = localStorage.getItem("time");

setInterval(function() {
    time++;
    localStorage.setItem("time", time);
    document.getElementById("time").innerHTML = localStorage.getItem("time");
}, 1000);


let logins = localStorage.getItem("logins");

logins++;

localStorage.setItem("logins", logins);

document.getElementById("logins").innerHTML = logins;

let newLogins = parseInt(localStorage.getItem("logins"));
if (!isNaN(newLogins)) {
  logins = newLogins;
}

const songs = [
    "holywars",
    "rainingblood",
    "warismyshepherd",
    "blacklist",
    "hangar18",
    "poisonwasthecure",
    "theburningofatlanta",
    "angelofdeath",
    "strikeofthebeast",
    "fivemagics",
    "thetoxicwaltz",
    "respectthedead",
    "takenoprisoners",
    "rustinpeace",
    "walktheplank"
]

function muteAudio() {
    for(let i = 0; i < songs.length; i++) {
        document.getElementById(songs[i]).pause();
        document.getElementById(songs[i]).currentTime = 0;
    }
}

function play(id) {
    muteAudio();
    let audio = document.getElementById(id);
    audio.play();
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let y = 0;

const colors = [
    "blue",
    "cyan",
    "mediumaquamarine"
];

let size = Math.floor(Math.random() * 8) + 4;

let matrixInterval;

function matrix() {
    matrixInterval = setInterval(function() {
        y++;
        size = Math.floor(Math.random() * 8) + 4;
        ctx.fillRect(Math.floor(Math.random () * 2500), y, size, size);
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    }, 50);
}

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

function enableHell() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    document.addEventListener("mousemove", (event) => {
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        ctx.strokeStyle = `rgb(${r},${g},${b})`;

        ctx.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
        ctx.lineTo(event.x, event.y, Math.floor(Math.random() * 16) + 1, Math.floor(Math.random() * 16) + 1);
        ctx.stroke();
    });
}

function clearCanvas() { location.reload(); }

const bot_colors = [
    "blue",
    "cyan",
    "mediumaquamarine"
]

let bot_x = Math.floor(Math.random() * canvas.width);
let bot_y = Math.floor(Math.random() * canvas.height);

let speed = 12;

function enableCompanion() {
    ctx.clearRect(bot_x, bot_y, 50, 50);
    let randomNum = Math.floor(Math.random() * 100);

    if(randomNum < 25) { bot_x += speed; }
    if(randomNum < 50 && randomNum > 25) { bot_x -= speed; }
    if(randomNum < 75 && randomNum > 50) { bot_y += speed; }
    if(randomNum < 100 && randomNum > 75) { bot_y -= speed; }

    if(bot_x < 0) { bot_x += speed; }
    if(bot_x > canvas.width - 50) { bot_x -= speed; }
    if(bot_y < 0) { bot_y += speed; }
    if(bot_y > canvas.height - 50) { bot_y -= speed; }

    ctx.fillStyle = bot_colors[Math.floor(Math.random() * bot_colors.length)];
    ctx.fillRect(bot_x, bot_y, 50, 50);
    document.getElementById("companionSpeed").textContent = speed;
    requestAnimationFrame(enableCompanion);
}

function botSpeedPlus() { speed++; }