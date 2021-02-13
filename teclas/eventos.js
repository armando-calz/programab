var teclas = { UP:38, DOWN:40, LEFT:37, RIGHT:39, SPACE:32};
var grozor = { TECLADO:2, ESPACIO:0.1, MARCO:5};

document.addEventListener("mousedown",comenzarMouse)
document.addEventListener("mousemove",dibujarMouse)
document.addEventListener("mouseup",pararMouse)
document.addEventListener("keydown", dibujarTeclado);
var c = document.getElementById("areaDeDibujo");
var paper = c.getContext("2d");
var colorLinea = "white";
var estado = 0;
var x = 710;
var y = 300;

dibujarLinea(colorLinea, x - 1, y - 1, x + 1, y + 1, paper);
dibujarLinea(colorLinea, 1380, 1, 1380, 599, paper, grozor.MARCO);
dibujarLinea(colorLinea, 40, 1, 1380, 1, paper, grozor.MARCO);
dibujarLinea(colorLinea, 40, 1, 40, 599, paper, grozor.MARCO);
dibujarLinea(colorLinea, 40, 599, 1380, 599, paper, grozor.MARCO);

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
  dibujarLinea(colorLinea, xt, yt, evento.layerX, evento.layerY, paper, grozor.TECLADO)
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
  var espacio = "black";
  var movimiento = 20;
  switch (evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorLinea, x, y, x, y - movimiento, paper, grozor.TECLADO);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorLinea, x, y, x, y + movimiento, paper, grozor.TECLADO);
    y = y + movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea(colorLinea, x, y, x - movimiento, y, paper, grozor.TECLADO);
    x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorLinea, x, y, x + movimiento, y, paper, grozor.TECLADO);
    x = x + movimiento;
    break;
    case teclas.SPACE:
    dibujarLinea(espacio, x, y, x + movimiento + 30, y, paper, grozor.ESPACIO);
    x = x + movimiento + 30;
    break;
    default:
    console.log("agar otra");
    break;
  }
}
