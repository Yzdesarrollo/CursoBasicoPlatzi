var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener('click', dibujoPorClick);

var d = document.getElementById('dibujito');   // Obtener el elmento por su id
var ancho = d.width;

var lienzo = d.getContext('2d');

//console.log(lienzo);

    // lienzo.beginPath(); // Iniciar un trazo
    // lienzo.strokeStyle = 'red'; // Linea roja
    // lienzo.moveTo(100,100); // posicion inicial en x,y
    // lienzo.lineTo(200,200); // posicion final en x,y
    // lienzo.stroke(); // trazar la linea
    // lienzo.closePath(); // Termina el trazo



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) 
{
    lienzo.beginPath(); // Iniciar un trazo
    lienzo.strokeStyle = color; // Linea roja
    lienzo.moveTo(xinicial,yinicial); // posicion inicial en x,y
    lienzo.lineTo(xfinal,yfinal); // posicion final en x,y
    lienzo.stroke(); // trazar la linea
    lienzo.closePath(); // Termina el trazo
}

function dibujoPorClick() 
{

    //var x = parseInt(texto.value);
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = '#FAA';
    var espacio = ancho / lineas;

    for( l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log('Linea ' + l);
    
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
    
}