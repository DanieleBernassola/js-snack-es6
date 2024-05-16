'use strict';

// Creo un array di oggetti
const squadreDiCalcio = [
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bologna',
        puntiFatti: 0,
        falliSubiti: 0
    },
]

// Funzione per generare numeri casuali
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ciclo forEach che assegna valori casuali a punti fatti e falli subiti
squadreDiCalcio.forEach(squadra => {
    squadra.puntiFatti = getRandomInt(0, 114);
    squadra.falliSubiti = getRandomInt(0, 500);
})

console.log(squadreDiCalcio);