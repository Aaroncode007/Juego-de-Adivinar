let numeroSecreto =0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usuario no acerto//
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor')
        }
        else{
            asignarTextoElemento('p', 'El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sortemos todos los numeros//
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sorteron todos los numeros posibles')
    }
    else{
        //si el nuemro genrado esta incluido en la lista//
        if (listaNumerosSorteados.includes()){
            return generarNumeroSecreto();
        }   
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }        
    }
   
}

function condicionesInicies(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja//
    limpiarCaja();
    //indicar mensaje de intevalo de nuenrnso//
    condicionesInicies();
    //genrar el numero aleatorio//
    //inicializar el numero de intentos//
    //dejar el botom sedabiliado //
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInicies();