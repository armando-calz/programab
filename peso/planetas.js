var g_tierra = 9.81;
var g_marte = 3.7;
var g_jupiter = 24.8;

function funMarte()
{
  peso = document.getElementById("textoPeso").value;
  peso_final = parseInt(peso * g_marte / g_tierra);
  swal("","Tu peso en Marte es de: "+peso_final+"kg","success")
  console.log(peso);
}
function funJup()
{
  peso = document.getElementById("textoPeso").value;
  peso_final = parseInt(peso * g_jupiter / g_tierra);
  swal("","Tu peso en Jupiter es de: "+peso_final+"kg","success")
  console.log(peso);
}
