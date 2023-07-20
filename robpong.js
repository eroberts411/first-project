const gameboard = document.getElementById ('gameboard');
const ctx = gameboard.getContext('2d');
const BOARDHEIGHT = 500;
const BOARDWIDTH = 500;
const PADDLESPIN = 1.5;
const PADDLEFORCE = 1.1;

let phil;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;
var philcolor = "red";
var leftcolor = "black";
var rightcolor = "white";

function clearBoard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,500,500);
}

function updateScore() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
    winner();
}

function draw() {
    clearBoard();
    paddleL.draw();
    paddleR.draw();
    phil.draw();
}

function score(player) {
    if (player == "left") scoreL++;
    if (player == "right") scoreR++;
    updateScore();
    phil = new Phil(250,250,1,1,12.5);
}

let intervalID;

function resetObjects() {
    phil = new Phil(250, 250, 1, 1, 12.5, philcolor);
    paddleL = new Paddle(0, 0, 100, 25, leftcolor);
    paddleR = new Paddle(475, 0, 100, 25, rightcolor);
}


function setPhil() {
    philcolor = document.getElementById("philcolorchoice").value;
    console.log(philcolor);
}

function setPaddleL() {
    leftcolor = document.getElementById("eduardocolorchoice").value;
    console.log(leftcolor);
}

function setPaddleR() {
    rightcolor = document.getElementById("josecolorchoice").value;
    console.log(rightcolor);
    resetGame();
}

function nextTick() {
    intervalID = setTimeout(
        () => {
            paddleL.move();
            paddleR.move();
            phil.bounceWall();
            if (phil.bouncePaddleL(paddleL)) score("right");
            if (phil.bouncePaddleR(paddleR)) score("left");
            phil.move();
            updateScore();
            draw();
            nextTick();
        }, 10
    );
}

function resetGame() {
    clearInterval(intervalID);
    resetObjects();
    scoreL = 0;
    scoreR = 0;
    updateScore();
    nextTick();
}

const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;
const PADDLEVELOCITY = 5;

window.addEventListener("keydown", keyDown);
function keyDown(event) {
    const key = event.keyCode;
    //console.log(`KEYDOWN: ${key}`);
    switch (key) {
        case (UPARROW):
            paddleR.vy = -PADDLEVELOCITY;
            break;
        case (DOWNARROW):
            paddleR.vy = PADDLEVELOCITY;
            break;
        case (WKEY):
            paddleL.vy = -PADDLEVELOCITY;
            break;
        case (SKEY):
            paddleL.vy = PADDLEVELOCITY;
            break;
    }
}

window.addEventListener("keyup", keyUp);
function keyUp(event) {
    const key = event.keyCode;
    //console.log(`KEYDOWN: ${key}`);
    switch (key) {
        case (UPARROW):
        case (DOWNARROW):
            paddleR.vy = 0;
            break;
        case (WKEY):
        case (SKEY):
            paddleL.vy = 0;
            break;
    }
}

function winner() {
    if (scoreL === 5) {
        alert(`Player 1 won!`);
        resetGame();
    } else if (scoreR === 5) {
        alert(`Player 2 won!`);
        resetGame();
    }
}