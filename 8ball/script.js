const yes = [
    "Of course",
    "Yes indeed",
    "Yup",
    "Yes sir",
    "Yeah",
    "Why wouldn't it be YES!!!!",
    "Why of course"
]

const no = [
    "Of course not",
    "Nah",
    "No way",
    "Nope",
    "Hell no",
    "I'm sorry, but the answer is a NO!",
    "Sorry bud it's a no"
]

var random8 = Math.floor(Math.random() * 2);
var randomNo = no[Math.floor(Math.random() * no.length)];
var randomYes = yes[Math.floor(Math.random() * yes.length)];

function call() {
    console.log("test")
    if(random8 < 1) {
        randomYes = yes[Math.floor(Math.random() * yes.length)];
        document.getElementById("ballNum").style.float = "right";
        document.getElementById("ballNum").style.marginRight = "5px";
        document.getElementById("ballNum").style.marginTop = "8px";
        document.getElementById("ballNum").style.color = "black";
        document.getElementById("ballText").innerHTML = randomNo;
        random8 = Math.floor(Math.random() * 2);
        randomNo = no[Math.floor(Math.random() * no.length)];
    } else {
        randomYes = yes[Math.floor(Math.random() * yes.length)];
        document.getElementById("ballNum").style.float = "right";
        document.getElementById("ballNum").style.marginRight = "22px";
        document.getElementById("ballNum").style.marginTop = "8px";
        document.getElementById("ballNum").style.color = "black";
        document.getElementById("ballText").innerHTML = randomYes;
        random8 = Math.floor(Math.random() * 2);
        randomNo = no[Math.floor(Math.random() * no.length)];
    }
}