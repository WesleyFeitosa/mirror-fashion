var inputElement = document.querySelector('#tamanho');
var outputElement = document.querySelector('#valortamanho');

function mostraTamanho(){
    outputElement.value = inputElement.value;
}

inputElement.oninput = mostraTamanho;