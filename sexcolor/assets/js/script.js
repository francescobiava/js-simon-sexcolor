// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

// variabili
var userName, sex, output;
output = document.getElementById('sexcolor');

// inserimento dati utente
userName = prompt('Inserisci il tuo nome');
sex = prompt('Inserisci M per maschio e F per femmina');

// output nome
output.innerHTML = userName;

// output con if sesso per colore
if (sex === 'M' || sex === 'm') {
  output.className = output.classList + " blue";
} else if (sex === 'F' || sex === 'f') {
  output.className = output.classList + " pink";
}