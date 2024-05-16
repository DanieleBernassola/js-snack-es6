'use strict';

// Array di oggetti
const biciDaCorsa = [
    {
        nome: 'Scott',
        peso: 10,
    },
    {
        nome: 'Cannondale',
        peso: 20,
    },
    {
        nome: 'Genesis',
        peso: 15,
    },
    {
        nome: 'Focus',
        peso: 5,
    },
    {
        nome: '3T',
        peso: 8,
    }
]

// Inizializzo la variabile che dirà qual è la bici più leggera
let biciLeggera = biciDaCorsa[0];
console.log(biciLeggera);

// Ciclo for per confrontare il peso di tutte le bici
for (let i = 0; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < biciLeggera.peso){
        biciLeggera = biciDaCorsa[i];
    }
}

// Utilizzando literal template stampo la bici con peso minore
console.log(`La bici con peso minore è: ${biciLeggera.nome}, che pesa ${biciLeggera.peso}kg`);