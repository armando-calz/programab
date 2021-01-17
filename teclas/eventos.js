var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
  switch (evento.keyCode)
  {
    case teclas.UP:
    console.log("agar arriba");
    break;
    case teclas.DOWN:
    console.log("agar abajo");
    break;
    case teclas.LEFT:
    console.log("agar izquerda");
    break;
    case teclas.RIGHT:
    console.log("agar derecha");
    break;
    default:
    console.log("agar otra");
    break
  }
}
