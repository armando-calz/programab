var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, SPACE: 32};

console.log(teclas);

document.addEventListener("mousedown",comenzarMouse)
document.addEventListener("mousemove",dibujarMouse)
document.addEventListener("mouseup",pararMouse)
document.addEventListener("keydown", dibujarTeclado);
var c = document.getElementById("areaDeDibujo");
var paper = c.getContext("2d");
var colorLinea = "white";
var grozorTeclado = 2;
var grozorMarco = 5;
var estado = 0;
var x = 710;
var y = 300;

dibujarLinea(colorLinea, x - 1, y - 1, x + 1, y + 1, paper);
dibujarLinea(colorLinea, 1380, 1, 1380, 599, paper, grozorMarco);
dibujarLinea(colorLinea, 40, 1, 1380, 1, paper, grozorMarco);
dibujarLinea(colorLinea, 40, 1, 40, 599, paper, grozorMarco);
dibujarLinea(colorLinea, 40, 599, 1380, 599, paper, grozorMarco);


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo, grozor)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grozor;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
function comenzarMouse(evento)
{
  estado = 2;
  xt = evento.layerX;
  yt = evento.layerY;
}
function dibujarMouse(evento)
{
  if (estado == 2) {
  dibujarLinea(colorLinea, xt, yt, evento.layerX, evento.layerY, paper, grozorTeclado)
  }
  xt = evento.layerX;
  yt = evento.layerY;
}
function pararMouse(evento)
{
  estado = 1;
  xt = evento.layerX;
  yt = evento.layerY;

}
function dibujarTeclado(evento)
{
  var colorcito = "white";
  var espacio = "black";
  var movimiento = 20;
  var movEspacio = 50;
  switch (evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, paper, grozorTeclado);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento, paper, grozorTeclado);
    y = y + movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movimiento, y, paper, grozorTeclado);
    x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, paper, grozorTeclado);
    x = x + movimiento;
    break;
    case teclas.SPACE:
    dibujarLinea(espacio, x, y, x + movEspacio, y, paper, grozorTeclado);
    x = x + movEspacio;
    break;
    default:
    console.log("agar otra");
    break;
  }
}
