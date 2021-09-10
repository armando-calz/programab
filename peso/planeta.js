alert("agar")
var planeta = parseInt(prompt("elige un planeta. \n 1 es Marte, 2 es Jupiter"));
var peso = parseInt(prompt("da tu peso"));
var g_tierra = 9.81;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
var n_plan;

if (planeta == 1)
{
  n_plan = "Marte";
  peso_final = peso * g_marte / g_tierra;
}
else if (planeta == 2)
{
  n_plan = "Jupiter";
  peso_final = peso * g_jupiter / g_tierra;
}
