const neocoinsText = document.getElementById("neocoins");

neocoinsText.textContent = localStorage.getItem("neocoin");

let neocoin = localStorage.getItem("neocoin");

let newNeocoin = parseInt(localStorage.getItem("neocoin"));
if (!isNaN(newNeocoin)) {
  neocoin = newNeocoin;
}

const howToInstallArchTxt = document.getElementById("how-to-install-arch.txt");

let price;

howToInstallArchTxt.onclick = function() {
    if(+localStorage.getItem("levels") >= 100) { discount = true; } else { discount = false; }
    price = 100;
    if(discount) {
        price = price - price / 10;
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("tech/how-to-install-arch.txt", "how-to-install-arch.txt");
        }
    } else {
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("tech/how-to-install-arch.txt", "how-to-install-arch.txt");
        }
    }
}

let TempleOSiso = document.getElementById("TempleOSiso");

TempleOSiso.onclick = function() {
    if(+localStorage.getItem("levels") >= 100) { discount = true; } else { discount = false; }
    price = 250;
    if(discount) {
        price = price - price / 10;
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("tech/TempleOS.iso", "TempleOS.iso");
        }
    } else {
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("tech/TempleOS.iso", "TempleOS.iso");
        }
    }
}

const song1 = document.getElementById("song1");

song1.onclick = function() {
    if(+localStorage.getItem("levels") >= 100) { discount = true; } else { discount = false; }
    price = 500;
    if(discount) {
        price = price - price / 10;
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("songs/song1.mp3", "song1.mp3");
        }
    } else {
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("songs/song1.mp3", "song1.mp3");
        }
    }
}

const song2 = document.getElementById("song2");

song2.onclick = function() {
    if(+localStorage.getItem("levels") >= 100) { discount = true; } else { discount = false; }
    price = 500
    if(discount) {
        price = price - price / 10;
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("songs/song2.mp3", "song2.mp3");
        }
    } else {
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("songs/song2.mp3", "song2.mp3");
        }
    }
}

const bgjpg = document.getElementById("bg.jpg");

bgjpg.onclick = function() {
    if(+localStorage.getItem("levels") >= 100) { discount = true; } else { discount = false; }

    price = 100;
    if(discount) {
        price = price - price / 10;
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("art/bg.jpg", "bg.jpg");
        }
    } else {
        if(neocoin < price) {
            alert("not enough money");
            return;
        } else {
            neocoin -= price;
            localStorage.setItem("neocoin", neocoin);
            document.getElementById("levels").textContent = localStorage.getItem("levels");
            if(+localStorage.getItem("levels") >= 100) {
                document.getElementById("discountHolder").style.display = "block";
            } else {
                document.getElementById("discountHolder").style.display = "none";
            }
            neocoinsText.textContent = localStorage.getItem("neocoin");

            download("art/bg.jpg", "bg.jpg");
        }
    }
}

function download(url, name) {
    const link = document.createElement("a");
    link.download = name;
    link.href = url;
    link.click();
}

document.getElementById("levels").textContent = localStorage.getItem("levels");

let discount;

if(+localStorage.getItem("levels") >= 100) {
    discount = true;
    document.getElementById("discountHolder").style.display = "block";
} else {
    discount = false;
    document.getElementById("discountHolder").style.display = "none";
}