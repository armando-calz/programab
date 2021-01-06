var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var col = "#AAF"

while (l < lineas)
{
xf = 10 * (l + 1)
yi = l * 10

dibujarLinea(col,0,xf,yi,300);
dibujarLinea(col,0,xf,300-yi,0);
dibujarLinea(col,300,xf,yi,0);
dibujarLinea(col,300,300-xf,yi,300);
l++;
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
