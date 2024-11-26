let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let image = new Image();

let x = 0;
let y = 0;
let vx = 5;
let vy = 2;
let rotation = 0;

image.onload = () => {
    setInterval(() => {
        context.clearRect(x, y, canvas.width, canvas.height);

        x += vx;
        y += vy;

        if (x + 100 >= canvas.width || x <= 0) {
            vx = -vx;
        }

        if (y + 100 >= canvas.height || y <= 0) {
            vy = -vy;
        }

        rotation += 0.2;
        
        context.save();
        context.translate(x+50, y+50);
        context.rotate(rotation);
        context.drawImage(image, -50, -50, 100, 100);
        context.restore();
    }, 50); 
};

image.src = "img/ball.png";