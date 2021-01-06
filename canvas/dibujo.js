var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var j = 0;
var yi, xf;
var col = "#AAF"

for(l=0; l < lineas; l++)
{
yi = 10 * l;
xf = 10 * (l + 1);
dibujarLinea(col, 1, yi, xf, 299);
console.log("linea" + l);
}

for(j=0; j < lineas; j++)
{
yi = 10 * j;
xf = 10 * (j + 1);
dibujarLinea(col, 299, yi, xf, 1);
}

dibujarLinea (col, 1, 1, 1, 299)
dibujarLinea (col, 1, 299, 299, 299)

dibujarLinea (col, 299, 1, 1, 1)
dibujarLinea (col, 299, 299, 299, 1)

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
