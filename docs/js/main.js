let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;
let limiteLetras = 200;
let tamanhoLetra = 10;
let arrayLetras = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "А", "В", "Г", "Д", "Є", "Ѕ", "З", "И", "Ѳ", "І", "К", "Л", "М", "Н", "Ѯ", "Ѻ", "П", "Ч", "Р", "С", "Т", "Ѵ", "Ф", "Х", "Ѱ", "Ѿ", "Ц",
];
let arrayObjetoLetras = [];
let letraCaindo;

canvas = document.querySelector("#canvas");
context = canvas.getContext('2d');

canvas.height = canvasHeight;
canvas.width = canvasWidth;

window.addEventListener("resize", function () {
    canvasHeight = window.innerHeight;
    canvasWidth = window.innerWidth;

    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    context.fillStyle = "black";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
})

window.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key == "ArrowUp") {
        tamanhoLetra++;
    } else if (event.key == "ArrowDown") {
        tamanhoLetra--;
    }
}) 

class LetraCaindo {
    
    constructor(x, y, speed) {

        this.x = x;
        this.y = y;
        this.speed = speed;
        this.colorAlpha = 1;
    }

    desenhar(context) {

        this.y += this.speed;
        this.letra = arrayLetras[Math.floor(Math.random() * arrayLetras.length)];

        if (this.colorAlpha > 0) {

            this.colorAlpha -= 0.05;
        } else {

            this.colorAlpha = 1;
            this.x = Math.floor((Math.random() * canvasWidth));
            this.y = Math.floor((Math.random() * canvasHeight));
            this.speed = Math.floor((Math.random() * 5) + 5);
        }

        context.fillStyle = `rgba(0, 225, 0, ${this.colorAlpha})`;
        context.font = tamanhoLetra + "px sans-serif";

        context.fillText(this.letra, this.x, this.y);
    }
}

function update () {

    requestAnimationFrame(update);

    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    if (arrayObjetoLetras.length < limiteLetras) {

        letraCaindo = new LetraCaindo(Math.floor((Math.random() * canvasWidth)), Math.floor((Math.random() * canvasHeight)), Math.floor((Math.random() * 5) + 5));
        arrayObjetoLetras.push(letraCaindo);
    } else {
    }

    for(let i = 0; i < arrayObjetoLetras.length; i++) {
       
        arrayObjetoLetras[i].desenhar(context);

        if (arrayObjetoLetras[i].y > canvasHeight) {
            arrayObjetoLetras[i].y = Math.floor((Math.random() * canvasHeight));
            arrayObjetoLetras[i].x = Math.floor((Math.random() * canvasWidth));
            arrayObjetoLetras[i].speed = Math.floor((Math.random() * 5) + 5);
        }
    }
}

update();
