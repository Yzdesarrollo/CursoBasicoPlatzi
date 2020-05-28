//EVENTOS//
document.addEventListener ('mousedown', empiezaLinea)
document.addEventListener ('mouseup', terminaLinea)
document.addEventListener ('mousemove', trazaLinea)

//VARIABLES//
var cuadrito = document.getElementById('lienzo_dibujo');
var cuadrito = cuadrito.getContext ('2d');
var nuevaLinea = false;
var xInicio = 0;
var yInicio = 0;
var colorcito = 'blue';

//FUNCIONES//

function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final)
{
    cuadrito.beginPath();
    cuadrito.strokeStyle = color;
    cuadrito.lineWidth = 1;
    cuadrito.moveTo(x_inicial, y_inicial);
    cuadrito.lineTo(x_final, y_final);
    cuadrito.stroke();
    cuadrito.closePath();
}

function empiezaLinea (evento)
{
    xInicio = evento.layerX;
    yInicio = evento.layerY;
    nuevaLinea = true;
}

function terminaLinea (evento)
{
    nuevaLinea = false;
    console.log('Mouse arriba')
}

function trazaLinea (evento)
{
    if (nuevaLinea == true)
    {
        dibujarLinea (colorcito, xInicio, yInicio, evento.layerX, evento.layerY)
        xInicio = evento.layerX
        yInicio = evento.layerY
    }
}