document.getElementById("changelog").onclick = function() { // open changelog
    on('log');
    on('cover');
    document.getElementById('cover').onclick = function() { // click anywhere to close it
        off('log');
        off('cover');
    }
}

document.getElementById("unlistedProjectsBtn").onclick = function() {
    on('unlistedProjects');
    on('cover');
    document.getElementById('cover').onclick = function() {
        off('unlistedProjects');
        off('cover');
    }
}

function on(id) { document.getElementById(id).style.display = "block"; } // show stuff
function off(id) { document.getElementById(id).style.display = "none"; } // hide stuff

function isMobile() { return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent); } // what do you think this does?

if (isMobile()) { // js mobile optimization :sob:
   document.getElementById("titlePre").innerHTML = `<div style="text-align: center;"><h1 style="font-size: 5rem;text-align:center;">NEOCORAL</h1><span style="text-align:center;">Copyright © 2025 zodajam</span></div>`;
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

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 15;

let r = 255;
let g = 0;
let b = 180;

document.addEventListener("mousemove", function(event) {
    ctx.beginPath();
    ctx.moveTo(event.x, event.y);
    ctx.lineTo(event.x + 10, event.y + 10);
    ctx.stroke();

    setTimeout(function() {
        ctx.clearRect(event.x - 10, event.y - 10, 30, 30);
        ctx.strokeStyle = `rgb(${r},${g},${b})`;

        r--;
        g++;
        b++;

        if(r < 0 && g > 255 & b > 255) {
            r = 255;
            g = 0;
            b = 180;
        }
    }, 1);
});

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
if (!isNaN(newNeocoin)) {
  neocoin = newNeocoin;
}