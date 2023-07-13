var cube = document.getElementById("cube");

var min = 1;
var max = 24;

cube.onclick = function() {
    var xRand = getRandom(min,max);
    var yRand = getRandom(min,max);
    cube.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;
}

function getRandom(max,min) {
    return(Math.floor(Math.random()*(max-min))+min)*90;
}

function mod(n,m) {
    return ((n%m)+m)%m;
}

function getResult(rotx, roty) {
    let countX = mod(rotx / 90,4);
    if (xountX === 1) {
        return 6;
    }
}

if (countX ===3) {
    return 5;
}

let countY = mod(rotY / 90 + countX,4);
return[1,4,2,3][countY];