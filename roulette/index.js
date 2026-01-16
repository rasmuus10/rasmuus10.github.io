const text = document.getElementById("roulette");
const neocoin_text = document.getElementById("neocoins");

neocoin_text.innerText = localStorage.getItem("neocoin");

let i = 0;

let rouelette_interval = null;

function spin() {
    neocoin -= 10;
    localStorage.setItem("neocoin", neocoin);
    neocoin_text.innerText = localStorage.getItem("neocoin");

    rouelette_interval = setInterval(function() {
        setTimeout(function() {
            text.innerText = "BLACK";
        }, 50);
        
        text.innerText = "RED";
    }, 100);
}

let neocoin = 0;

let newNeocoin = parseInt(localStorage.getItem("neocoin"));
if (!isNaN(newNeocoin)) {
  neocoin = newNeocoin;
}

function stop() {
    clearInterval(rouelette_interval);

    let random_num = Math.floor(Math.random() * 10);

    if(random_num < 5) {
        neocoin += 20;
        localStorage.setItem("neocoin", neocoin);
        neocoin_text.innerText = localStorage.getItem("neocoin");
    }
}