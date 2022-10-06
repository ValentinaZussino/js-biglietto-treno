// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// *********
// chiedo all'utente il n km
// chiedo all'utente la sua età
// calcolo prezzo in base al km quindi 0.21 x km
// poi se età utente < 18 allora sconto 20% su prezzo al km, 
    // altrimenti se età utente > 65 allora sconto 40%,
    // altrimenti rimane prezzo al km
// aggiungere questione decimali
// aggiungere dopo che tutto funziona la verifica inserimento numeri e non lettere

let numeroKm = prompt('Scrivi in numero quanti kilometri devi percorrere');
let etaUtente = prompt('Scrivi in numero la tua età');
const prezzoAlKm = 0.21 * numeroKm;

console.log(numeroKm, etaUtente, prezzoAlKm);

const sconto20 = prezzoAlKm * 20 / 100;
const sconto40 = prezzoAlKm * 40 / 100;
let scontoSotto18 = prezzoAlKm - sconto20;
let scontoSopra65 = prezzoAlKm - sconto40;

console.log(sconto20, sconto40, scontoSotto18, scontoSopra65);

if(etaUtente < 18){
    console.log(scontoSotto18.toFixed(2))
} else if(etaUtente > 65){
    console.log(scontoSopra65.toFixed(2))
} else{
    console.log(prezzoAlKm.toFixed(2))
};