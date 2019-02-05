var canvas, ctx, WIDTH, HEIGHT, FPS, tileSize, playing;
var bar, ball;

function resizeWindow(){
    var borderWidth = document.getElementById("left").offsetWidth * 2;
    var borderHeight = document.getElementById("top").offsetHeight * 2;
    
    WIDTH = window.innerWidth - borderWidth;
    HEIGHT = window.innerHeight - borderHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    tileSize = Math.max(Math.floor(WIDTH / 50), Math.floor(HEIGHT / 50));
}

function Bar(){
    this.body = [[0,0], [0,1], [0,2]];
    this.color = "#fff";

    this.draw = function(){
        ctx.fillStyle = this.color;

        for(var i = 0; i < this.body.length; i++){
            ctx.fillRect(this.body[i][0] * tileSize, this.body[i][1] * tileSize, tileSize - 1, tileSize - 1);
        }
    };
}

function Ball() {
    this.body = [20,10];
    this.color = "#fff";

    this.draw = function(){
        ctx.fillStyle = this.color;

        ctx.fillRect(this.body[0] * tileSize, this.body[1] * tileSize, tileSize - 1, tileSize - 1);
    };
}

function init(){
    canvas = document.createElement("canvas");

    resizeWindow();
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");

    bar = new Bar();
    bar.draw();

    bar2 = new Bar();
    bar2.body = [[50,10], [50,11], [50,12]];
    bar2.draw();

    ball = new Ball();
    ball.draw();
}

window.addEventListener('resize', resizeWindow);

init();