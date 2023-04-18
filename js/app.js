var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle= "white";
pincel.rect(0,0,600,400);
pincel.fill();

function dibujarCirculo(x,y,radio,color){
    pincel.fillStyle = (color);
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    //Math.PI = Numero PI (3.14)
    pincel.fill();
}
function clean(){
    pincel.clearRect(0,0,1000,1000);
}
var r = 10;
var x = 0;
var sentido = 1;
var xA;
var xY;

function diseñarObjetivo(x,y){
    dibujarCirculo(x,y,r+20,"red");
    dibujarCirculo(x,y,r+10,"white");
    dibujarCirculo(x,y,r,"red");
}

function sortear(maximo){
    return Math.floor(Math.random()*maximo)
}

function actualizar(){
    clean();
    xA=sortear(600);
    yA=sortear(400);
    diseñarObjetivo(xA,yA);
}

setInterval(actualizar,1000);

function tiro(evento){
var x = evento.pageX - pantalla.offsetLeft;
var y = evento.pageY - pantalla.offsetTop;
if((x < xA+r)&&(x > xA-r)&&(y < yA+r)&&(y > yA-r)){
    alert("¡¡Felicidades, diste al blanco!!");
}    
}

pantalla.onclick = tiro;





    // var contador = 1
// function contar(){
//     console.log(contador);
//     contador++
// }


// setInterval(contar,1000);

