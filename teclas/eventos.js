var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

// console.log(teclas);
// keydown => Usada cuando se oprime la tecla
// keyup => Cuando levanto el dedo de la tecla
document.addEventListener('keydown', dibujarTeclado);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
var x = 100;
var y = 100;

// dibujarLinea('red',149, 149, 151, 151, papel);
dibujarLinea('red',x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
    lienzo.beginPath(); // Iniciar un trazo
    lienzo.strokeStyle = color; // Linea roja
    lienzo.lineWidth = 3; // 3 pixeles de grosor de la linea.
    lienzo.moveTo(xinicial,yinicial); // posicion inicial en x,y
    lienzo.lineTo(xfinal,yfinal); // posicion final en x,y
    lienzo.stroke(); // trazar la linea
    lienzo.closePath(); // Termina el trazo
}


function dibujarTeclado(evento) 
{
    // console.log('Tecla oprimida')
    // console.log(evento)
  // if(evento.keyCode == teclas.UP)
  // {
  //   console.log('Vamos pa arriba');
  // }
 var colorcito = 'blue';
 var movimiento = 3;
    switch (evento.keyCode) 
    {
      case teclas.UP:
          dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
          y = y - movimiento;
          break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
            break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
            break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;
        default:
            console.log('otra tecla');
            break;
    }
}