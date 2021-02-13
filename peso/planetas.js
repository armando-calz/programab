var tp = document.getElementById("textoPeso");
var g_tierra = 9.81
var g_marte = 3.7
var g_jupiter = 24.8

function funMarte()
{

}
function funJup()
{
  var peso = parseInt(tp.value);
  if (peso > .01)
  {
  var n_plan = "Jupiter";
  pesoFinal = peso * g_jupiter / g_tierra;
  document.write("funciona " + pesoFinal)
  }
}
