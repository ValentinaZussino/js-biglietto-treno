/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*********
chiedo all'utente il n km
chiedo all'utente la sua età
calcolo prezzo in base al km quindi 0.21 x km
poi se età utente < 18 allora sconto 20% su prezzo al km, 
    altrimenti se età utente > 65 allora sconto 40%,
    altrimenti rimane prezzo al km
aggiungere questione decimali
aggiungere dopo che tutto funziona la verifica inserimento numeri e non lettere */

const numeroKm = prompt('Scrivi in numero quanti kilometri devi percorrere');
const etaUtente = prompt('Scrivi in numero la tua età');
let prezzoPerNumKm = 0.21 * numeroKm;

// console.log(numeroKm, etaUtente, prezzoPerNumKm);

if (isNaN(numeroKm) || isNaN(etaUtente)){
    alert('Inserisci i dati in forma numerica senza spazi per favore e usa il punto al posto della virgola')
} 

if(etaUtente < 18){
    prezzoPerNumKm = prezzoPerNumKm * 0.8;
} else if(etaUtente > 65){
    prezzoPerNumKm = prezzoPerNumKm * 0.6;
} else{
    prezzoPerNumKm = prezzoPerNumKm;
}
prezzoPerNumKm = prezzoPerNumKm.toFixed(2);
document.getElementById("prezzoticket").innerHTML = prezzoPerNumKm + ' &euro;';

