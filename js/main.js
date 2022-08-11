const letras = new Map([['a', 'ai'],
['e', 'enter'],
['i', 'imes'],
['o', 'ober'],
['u', 'ufat']]);

function encriptar() {
    let str = "";

    if (input.value.trim().length != 0) {

        for (let i = 0; i < input.value.length; i++) {

            if (letras.has(input.value[i])) {

                str = str + letras.get(input.value[i]);

            }
            else {

                str = str + input.value[i];

            }
        }

        mostrarOutput();
        escribirEnOutput(str);
    }
    else {
        ocultarOutput();
    }
}

function desencriptar() {
    let str = input.value;
    let iter = letras.keys();

    if (input.value.trim().length != 0) {

        for (let val of iter) {

            if (str.includes(val)) {

                str = str.replaceAll(letras.get(val), val);

            }
        }

        mostrarOutput();
        escribirEnOutput(str);
    }
    else {
        ocultarOutput();
    }
}
function ocultarOutput() {

    document.getElementById("sin-output").style.display = "block";
    document.getElementById("con-output").style.display = "none";

}

function mostrarOutput() {

    document.getElementById("sin-output").style.display = "none";
    document.getElementById("con-output").style.display = "block";

}

function escribirEnOutput(str) {

    output.innerHTML = str;

}

function limpiarPlaceHolderText() {

    input.placeholder = "";

}

function placeholderText() {

    input.placeholder = "Ingrese texto aqui...";

}

function copiar() {

    let texto = output.innerHTML;
    let elTemp = document.createElement("textarea");

    document.body.appendChild(elTemp);
    elTemp.value = texto;
    elTemp.select();

    document.execCommand("copy");

    document.body.removeChild(elTemp);

}

var input = document.getElementById("input-text");
var output = document.getElementById("output-text");

var boton_encriptar = document.getElementById("button-encriptar");
var boton_desencriptar = document.getElementById("button-desencriptar");
var boton_copiar = document.getElementById("button-copiar");

document.getElementById("con-output").style.display = "none";

input.onclick = limpiarPlaceHolderText;
input.onblur = placeholderText;

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;
boton_copiar.onclick = copiar;
