var teclas = {
    UP: 38,
    DOWN: 40,
    LETF: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener('keyup', dibujarTeclado);


function dibujarTeclado(evento) 
{
    console.log(evento);
  if(evento.keyCode == teclas.UP)
  {
    console.log('Vamos pa arriba');
  }

  switch (evento.keyCode) 
  {
    case teclas.UP:
        console.log('arriba');
        break;
    case teclas.DOWN:
          console.log('abajo');
          break;
  
      default:
          break;
  }
}