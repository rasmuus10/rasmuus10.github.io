document.getElementById("changelog").onclick = function() { // open changelog
    on('log');
    on('cover');
    document.getElementById('cover').onclick = function() { // click anywhere to close it
        off('log');
        off('cover');
    }
}

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

function play(id) {
    let audio = document.getElementById(id);
    audio.play();
}

function muteAudio() {
    let audio1 = document.getElementById("holywars");
    let audio2 = document.getElementById("rainingblood");
    let audio3 = document.getElementById("warismyshepherd");
    let audio4 = document.getElementById("blacklist");
    let audio5 = document.getElementById("hangar18");
    let audio6 = document.getElementById("poisonwasthecure");
    let audio7 = document.getElementById("theburningofatlanta");
    let audio8 = document.getElementById("angelofdeath");
    let audio9 = document.getElementById("strikeofthebeast");
    let audio10 = document.getElementById("fivemagics");
    let audio11 = document.getElementById("thetoxicwaltz");

    audio1.pause();
    audio1.currentTime = 0;

    audio2.pause();
    audio2.currentTime = 0;

    audio3.pause();
    audio3.currentTime = 0;

    audio4.pause();
    audio4.currentTime = 0;

    audio5.pause();
    audio5.currentTime = 0;

    audio6.pause();
    audio6.currentTime = 0;

    audio7.pause();
    audio7.currentTime = 0;

    audio8.pause();
    audio8.currentTime = 0;

    audio9.pause();
    audio9.currentTime = 0;

    audio10.pause();
    audio10.currentTime = 0;

    audio11.pause();
    audio11.currentTime = 0;
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