// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

// variabili
var numRandom, userNum;
var numbers = [];
var result = [];

// creazione dei 5 numeri random con controllo che non siano ripetuti
while (numbers.length < 5) {
  numRandom = getRndInteger(1, 100);
  if (numbers.includes(numRandom) === false) {
    numbers.push(numRandom);
  }
}

// DEBUG
console.log(numbers);

// alert con i numeri
alert('Memorizza questi 5 numeri e quando sei pronto premi OK\n' + numbers);

// function
setTimeout(check, 30000);

// dichiarazione functions
function check() {
  for (i = 0; i < 5; i++) {
    userNum = parseInt(prompt('Adesso inserisci uno alla volta i numeri che hai memorizzato'));
    if (numbers.includes(userNum) === true && result.includes(userNum) === false) {
      result.push(userNum);
    }
  }
  return console.log('Hai indovinato ', result.length, ' numeri', result);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}