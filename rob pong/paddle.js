class Paddle {
    constructor(x,y,l,w,c) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.l = l;
        this.w = w;
        this.c = c;
    }
    
    draw() {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";
        ctx.fillRect (this.x,this.y,this.w,this.l);
        ctx.strokeRect (this.x,this.y,this.w,this.l);
    }
    
    
    move() {
        let newY = this.y +this.vy;
        if (newY < 0) return;
        if (newY > BOARDHEIGHT - this.l) return;
        this.y = newY;
    }
}

//paddle L is Eduardo
//paddle R is Jose