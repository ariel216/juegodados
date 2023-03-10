// js de inicio
console.log('Inicio Juego de Dados!');

ganador = false;

let totalJugador = 0;
let totalMaquina = 0;

const lanzar = document.getElementById('lanzar');
const recargar = document.getElementById('recargar');
const resultadoJugador = document.getElementById('resultadoJugador');
const resultadoMaquina = document.getElementById('resultadoMaquina');

const sumaJugador = document.getElementById('sumaJugador');
const sumaMaquina = document.getElementById('sumaMaquina');

lanzar.addEventListener('click', lanzamiento);

recargar.addEventListener('click', recarga);

function recarga(){
    location.reload();
}

function lanzamiento (){
    event.preventDefault()
    console.log('Se lanza los dados');

    let aleatorioJugador = Math.trunc(Math.random()* 6 + 1);

    let aleatorioMaquina = Math.trunc(Math.random()* 6 + 1);

    //contadores
    totalJugador += aleatorioJugador;
    totalMaquina += aleatorioMaquina;
    
    resultadoJugador.innerHTML = 'Dado del Jugador: ' + aleatorioJugador;

    resultadoMaquina.innerHTML = 'Dado del Máquina ' + aleatorioMaquina;


    //define ganadores
    if(totalJugador>=100){
        sumaJugador.innerHTML = 'Puntaje Acumulado Jugador: ' + totalJugador +' GANADOR!!!';
        sumaMaquina.innerHTML = 'Puntaje Acumulado Máquina ' + totalMaquina;
        sumaJugador.style.color = 'red';
        reiniciar();
    }else if(totalMaquina>=100){
        sumaJugador.innerHTML = 'Puntaje Acumulado Jugador: ' + totalJugador;
        sumaMaquina.innerHTML = 'Puntaje Acumulado Máquina ' + totalMaquina +' GANADOR!!!';
        sumaMaquina.style.color = 'red';
        reiniciar();
    }else{
        sumaJugador.innerHTML = 'Puntaje Acumulado Jugador: ' + totalJugador;
        sumaMaquina.innerHTML = 'Puntaje Acumulado Máquina ' + totalMaquina;
    }

}

function reiniciar (){
    recargar.style.display = 'block';
    lanzar.style.display = 'none';
}

