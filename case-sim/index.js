const main = document.getElementById("main"); // main box to add opened skin
const balText = document.getElementById("balance");
const dropText = document.getElementById("drop");

const blues = [
  // all blue skins
  "the homeless guy behind the liquor store",
  "shaved racoon",
  "empty axe body spray bottle",
];

const purples = [
  // all purple skins
  "half used lighter",
  "stray cat",
  "acoustic guitar",
];

const pinks = [
  // all pink skins
  "suspicious usb stick",
  "2.5kg iron plate for a home gym",
  "dave mustaine's hair",
];

const reds = [
  // all red skins
  "$20 dollar bill",
  "screen protector",
  "blanket with purple stars"
];

const golds = [
  // all golds
  "iphone 5c",
  "bag of 'salt'",
  "bass amplifier",
];

let balance = 0;

let newBalance = parseInt(localStorage.getItem("neocoin"));
if (!isNaN(newBalance)) {
  balance = newBalance;
}

balText.textContent = localStorage.getItem("neocoin");

function openCase() {
  // Make the balance into a float so balance does not concatenate the number to the string
  balance = parseFloat(balText.textContent);

  // If the balance contains any character that is not a number this code will send message and stop executing
  if (isNaN(balance)) {
    alert("An error occurred. Please contact the developer.");
    return;
  }

  // Check if the balance is 5 or less, if it is then send message and stop executing
  // (This was "balance <= 0" which can give negative balance)
  if (balance < 5) {
    // No need to add another onclick callback to the openCaseBtn element
    alert("no money!");
    return;
  }

  balance -= 5;
  localStorage.setItem("neocoin", balance);
  balText.textContent = localStorage.getItem("neocoin");

  let randomNum = Math.floor(Math.random() * 100);
  let skinType;
  const plusMoneyText = document.getElementById("plusMoney");

  if(randomNum < 69) { // 69% chance
    plusMoneyText.style.color = "blue";
    plusMoneyText.textContent = "+$0.25";
    skinType = "blue";
    balance += 0.25;
    balText.textContent = balance;
    let randomBlue = blues[Math.floor(Math.random() * blues.length)];
    dropText.style.color = "blue";
    dropText.innerHTML = randomBlue;

    return;
  }

  if(randomNum < 87) { // 18% chance
    plusMoneyText.style.color = "#5600c4";
    plusMoneyText.textContent = "+$1";
    skinType = "purple";
    balance += 1;
    balText.textContent = balance;
    let randomPurple = purples[Math.floor(Math.random() * purples.length)];
    dropText.style.color = "#5600c4";
    dropText.innerHTML = randomPurple;

    return;
  }

  if(randomNum < 90) { // 3% chance
    plusMoneyText.style.color = "#ff00fb";
    plusMoneyText.textContent = "+$25";
    skinType = "pink";
    balance += 25;
    balText.textContent = balance;
    let randomPink = pinks[Math.floor(Math.random() * pinks.length)];
    dropText.style.color = "#ff00fb";
    dropText.innerHTML = randomPink;

    return;
  }

  if(randomNum < 92) { // 2% chance
    plusMoneyText.style.color = "red";
    plusMoneyText.textContent = "+$50";
    skinType = "red";
    balance += 50;
    balText.textContent = balance;
    let randomRed = reds[Math.floor(Math.random() * reds.length)];
    dropText.style.color = "red";
    dropText.innerHTML = randomRed;

    return;
  }

  if(randomNum < 93) { // 1% chance
    plusMoneyText.style.color = "gold";
    plusMoneyText.textContent = "+$250";
    skinType = "gold";
    balance += 250;
    balText.textContent = balance;
    let randomGold = golds[Math.floor(Math.random() * golds.length)];
    dropText.style.color = "gold";
    dropText.innerHTML = randomGold;

    return;
  }
}

// redeem code

const redeemCode = document.getElementById("redeemCode");

redeemCode.onclick = function() {
  var code = window.prompt("Enter code to redeem rewards");

  if(code === "1.2.5") {
    balance += 1250;
    localStorage.setItem("neocoin", balance);
    balText.textContent = balance;
  } else { 
    alert("Not a code!");
  }
}