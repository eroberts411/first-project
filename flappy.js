var myGamePiece;
const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;

function startGame() {
    myGameArea.start();
    myGamePiece = new CompositionEvent(140, 100, "red", 10, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0,0,this.canvas.width,this.cancas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);  
    }
    
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
}

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