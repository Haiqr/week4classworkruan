// ===============================
// Canvas Walking Sprite Challenge
// ===============================

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

let zombieBack = document.getElementById("zombie_back");
let zombieRight = document.getElementById("zombie_right")
let zombieLeft = document.getElementById("zombie_left")
let zombieFront = document.getElementById("zombie_front")

let x = 100;
let y = 100;

pencil.imageSmoothingEnabled = false; 
let speed = 40;

function onKeyPressed(event){
    let isWPushed = event.key == "w";
    let isDPushed = event.key == "d";
    let isAPushed = event.key == "a";
    let isSPushed = event.key == "s";
    if(isWPushed) {
        pencil.clearRect(0,0, canvas.width, canvas.height);
        y-= speed;
        pencil.drawImage(zombieBack, x, y, 100, 100);
    } else if(isDPushed) {
        pencil.clearRect(0,0, canvas.width, canvas.height);
        x+= speed;
        pencil.drawImage(zombieRight, x, y, 100, 100);
    }else if(isAPushed) {
        pencil.clearRect(0,0, canvas.width, canvas.height);
        x-= speed;
        pencil.drawImage(zombieLeft, x, y, 100, 100);
    }else if(isSPushed) {
        pencil.clearRect(0,0, canvas.width, canvas.height);
        y+= speed;
        pencil.drawImage(zombieFront, x, y, 100, 100);
    }
  

}


document.addEventListener("keydown", onKeyPressed)