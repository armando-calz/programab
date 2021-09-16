var g_tierra = 9.81;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_sol = 274;

function funMarte()
{
  peso = document.getElementById("textoPeso").value;
  peso_final = parseInt(peso * g_marte / g_tierra);
  if (peso>0)
  {
    swal("","Tu peso en Marte es de: "+peso_final+"kg","success")
    console.log(peso);
  }
  else
  {
    swal("","ingresa tu peso","error")
  }
}
function funJup()
{
  peso = document.getElementById("textoPeso").value;
  peso_final = parseInt(peso * g_jupiter / g_tierra);
  if (peso>0)
  {
    swal("","Tu peso en Jupiter es de: "+peso_final+"kg","success")
    console.log(peso)
  }
  else
  {
    swal("","ingresa tu peso","error")
  }
}
function funSol()
{
  peso = document.getElementById("textoPeso").value;
  peso_final = parseInt(peso * g_sol / g_tierra);
  if (peso>0)
  {
    swal("","Tu peso en el sol es de: "+peso_final+"kg","success")
    console.log(peso)
  }
  else
  {
    swal("","ingresa tu peso","error")
  }
}
