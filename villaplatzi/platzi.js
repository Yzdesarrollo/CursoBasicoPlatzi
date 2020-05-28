var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d');


var fondo = {
    url: 'tile.png',
    cargarOK: false
};

var vaca = {
    url: 'vaca.png',
    cargarOK: false
};

var cantidad = aleatorio(1, 50);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url; 
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVacas);


function cargarFondo() 
{
    fondo.cargarOK = true;
    dibujar();
}

function cargarVacas() 
{
    vaca.cargarOK = true;
    dibujar();
}

function dibujar() 
{
    if(fondo.cargarOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargarOK)
    {
        console.log(cantidad);
        for(var v = 0; v < cantidad; v++ )
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);

        }
        
    }
}


function aleatorio(min, maxi) 
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1 )) + min;
    return resultado;
}