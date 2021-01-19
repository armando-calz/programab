var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var c = document.getElementById("areaDeDibujo");
var paper = c.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("blue", 149, 149, 151, 151, paper);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, paper);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento, paper);
    y = y + movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movimiento, y, paper);
    x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, paper);
    x = x + movimiento;
    break;
    default:
    console.log("agar otra");
    break;
  }
}
