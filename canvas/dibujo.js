var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("pulsador");
texto.addEventListener("keyup", function(event)
{
    event.preventDefault();
if (event.keyCode === 13)
{
  document.getElementById("pulsador").click();
}});
boton.addEventListener("click", dibujoPorClick);
var ancho = 500;
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


function doSomething(){
  event.preventDefault();
if (event.keyCode === 13)
{
document.getElementById("pulsador").click();
}
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
function dibujoPorClick ()
{
  lienzo.clearRect(0,0,ancho,ancho);
  console.log(lineas);
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var col = "#AAF"
  var espacio = ancho / lineas;

  while (l < lineas)
  {
  xf = espacio * (l + 1)
  yi = l * espacio

  dibujarLinea(col,0,xf,yi,ancho);
  dibujarLinea(col,0,xf,ancho-yi,0);
  dibujarLinea(col,ancho,xf,yi,0);
  dibujarLinea(col,ancho,ancho-xf,yi,ancho);
  l++;
  }

  dibujarLinea(col,1,1,1,ancho - 1);
  dibujarLinea(col,1,1,ancho - 1,1);
  dibujarLinea(col,1,ancho - 1,ancho - 1,ancho - 1);
  dibujarLinea(col,ancho - 1,1,ancho - 1,ancho - 1);
}
