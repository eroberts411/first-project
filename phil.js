class Phil {
    constructor(x,y,vx,vy,r,c) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.c = c;
    }

    draw() {
        ctx.fillStyle = philcolor;
        ctx.stroke.Style = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.r,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    bounceWall() {
        //topwall
        if (this.y < this.r) {
            this.vy = 0.9*Math.abs(this.vy);
        }

        //bottomwall
        if (this.y > BOARDHEIGHT - this.r) {
            this.vy = -0.9*Math.abs(this.vy);
        }
    }
    bouncePaddleL(paddle) {
        if(this.x - this.r > paddle.w) return false;
        if(this.x - this.r < 0) return true;
        if(this.y < paddle.y) return false;
        if(this.y > paddle.y + paddle.l) return false;
        if(this.vx < 0) {
            this.vx = PADDLEFORCE * Math.abs(this.vx);
            let paddlePos = (this.y - paddle.y - paddle.l/2) / paddle.l * 2;
            this.vy = this.vy + paddlePos * PADDLESPIN;
        }
        return false;
    }
    bouncePaddleR(paddle) {
        if(this.x + this.r < paddle.x) return false;
        if(this.x + this.r > paddle.x +paddle.w) return true;
        if(this.y < paddle.y) return false;
        if(this.y > paddle.y + paddle.l) return false;
        if(this.vx > 0) {
            this.vx = -1 * PADDLEFORCE * Math.abs(this.vx);
            let paddlePos = (this.y - paddle.y - paddle.l/2) / paddle.l * 2;
            this.vy = this.vy + paddlePos * PADDLESPIN;
        }
        return false;
    }
}
