var texto1 = document.getElementById("texto_lineas1");
var boton1 = document.getElementById("botoncito1");
boton1.addEventListener("click", dibujoPorClick1);

var texto2 = document.getElementById("texto_lineas2");
var boton2 = document.getElementById("botoncito2");
boton2.addEventListener("click", dibujoPorClick2);

var texto3 = document.getElementById("texto_lineas3");
var boton3 = document.getElementById("botoncito3");
boton3.addEventListener("click", dibujoPorClick3);

var texto4 = document.getElementById("texto_lineas4");
var boton4 = document.getElementById("botoncito4");
boton4.addEventListener("click", dibujoPorClick4);

var texto5 = document.getElementById("texto_lineas5");
var boton5 = document.getElementById("botoncito5");
boton5.addEventListener("click", dibujoPorClick5);

var texto6 = document.getElementById("texto_lineas6");
var boton6 = document.getElementById("botoncito6");
boton6.addEventListener("click", dibujoPorClick6);

var texto7 = document.getElementById("texto_lineas7");
var boton7 = document.getElementById("botoncito7");
boton7.addEventListener("click", dibujoPorClick7);

var texto8 = document.getElementById("texto_lineas8");
var boton8 = document.getElementById("botoncito8");
boton8.addEventListener("click", dibujoPorClick8);

var d = document.getElementById("dibujito");
var ancho=d.width;
var lienzo = d.getContext("2d");

dibujarLinea("red", 1, 1, 1, 300);
dibujarLinea("red", 0, 299, 299, 299);
dibujarLinea("red", 0, 1, 300, 1);
dibujarLinea("red", 299, 0, 299, 299);

dibujarLinea("black", 150, 0, 150, 300);
dibujarLinea("black", 0, 150, 300, 150);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick1()
{
    var l=0;
    var linea=parseInt(texto1.value);
    var espacio = ancho / linea;

    for(l=0;l<linea;l++)
    {
        yi=espacio*l;
        xf=espacio*(l+1);
        dibujarLinea("red", 0, yi, xf, 300); 
    }
}

function dibujoPorClick2()
{
    var l=0;
    var linea=parseInt(texto2.value);
    var espacio = ancho / linea;

    for(l=0;l<linea;l++)
    {
        yi=espacio*(l+1);
        xf=300-l*espacio;
        dibujarLinea("yellow", 0, yi, xf, 0);
    }
}

function dibujoPorClick3()
{
    var l=0;
    var linea=parseInt(texto3.value);
    var espacio = ancho / linea;

    for(l=0;l<linea;l++)
    {
        xi=espacio*l;
        yf=espacio*(l+1);
        dibujarLinea("green", xi, 0, 300, yf);
    }
}

function dibujoPorClick4()
{
    var l=0;
    var linea=parseInt(texto4.value);
    var espacio = ancho / linea;

    for(l=0;l<linea;l++)
    {
        yi=espacio*l;
        xf=300-espacio*(l+1);
        dibujarLinea("blue", 300, yi, xf, 300); 
    }
}

function dibujoPorClick5()
{
    var l=0;
    var linea2=parseInt(texto5.value);
    var espacio = (ancho/2) / linea2;

    for(l=0;l<linea2;l++)
    {
        yi=espacio*l;
        xf=150+espacio*(l+1);
        dibujarLinea("orange", 150, yi, xf, 150); 
    }
}

function dibujoPorClick6()
{
    var l=0;
    var linea2=parseInt(texto6.value);
    var espacio = (ancho/2) / linea2;

    for(l=0;l<linea2;l++)
    {
        xi=espacio*l;
        yf=150+espacio*(l+1);
        dibujarLinea("purple", xi, 150, 150, yf); 
    }

}

function dibujoPorClick7()
{
    var l=0;
    var linea2=parseInt(texto7.value);
    var espacio = (ancho/2) / linea2;

    for(l=0;l<linea2;l++)
    {
        yi=150+espacio*(l+1);
        xf=300-espacio*l;
        dibujarLinea("black", 150, yi, xf, 150); 
    }
    
}

function dibujoPorClick8()
{
    var l=0;
    var linea2=parseInt(texto8.value);
    var espacio = (ancho/2) / linea2;

    for(l=0;l<linea2;l++)
    {
        xi=espacio*l;
        yf=150-espacio*(l+1);
        dibujarLinea("red", xi, 150, 150, yf); 
    } 
}