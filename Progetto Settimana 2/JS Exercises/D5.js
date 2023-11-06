/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift();
pets.push('redfish');
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = "AB123";
cars[1].licensePlate = "BC123";
cars[2].licensePlate = "CD123";

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({brand: 'BMW', model: 'x1',color:'silver',licensePlate:'DE123', trims:['life','style','r-line']})

for(i=0;i<cars.length;i++){
  delete cars[i].trims[2];
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(i=0;i<cars.length;i++){
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(i=0;i<cars.length;i++){
  if(cars[i].color.startsWith("b")){
    console.log(cars[i].brand+ cars[i].color + "Fizz");
  } else {
    console.log(cars[i].brand+ cars[i].color +"Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

{
  let i = 0;
while (i < numericArray.length) {
  const numero = numericArray[i];
  console.log(numero);

  if (numero === 32) {
    break; 
  }

  i++;
}
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const posizioni=[];
for (let i = 0; i < charactersArray.length; i++) {
switch(charactersArray[i]){
  case 'a': console.log('A corrisponde a 1'); posizioni.push(1); break;
  case 'b': console.log('B corrisponde a 2'); posizioni.push(2);break;
  case 'c': console.log('C corrisponde a 3'); posizioni.push(3);break;
  case 'd': console.log('D corrisponde a 4'); posizioni.push(4);break;
  case 'e': console.log('E corrisponde a 5'); posizioni.push(5);break;
  case 'f': console.log('F corrisponde a 6'); posizioni.push(6);break;
  case 'g': console.log('G corrisponde a 7'); posizioni.push(7); break;
  case 'h': console.log('H corrisponde a 8'); posizioni.push(8);break;
  case 'i': console.log('I corrisponde a 9'); posizioni.push(9);break;
  case 'l': console.log('L corrisponde a 10'); posizioni.push(10);break;
  case 'm': console.log('M corrisponde a 11'); posizioni.push(11);break;
  case 'n': console.log('N corrisponde a 12'); posizioni.push(12);break;
  case 'o': console.log('O corrisponde a 13'); posizioni.push(13);break;
  case 'p': console.log('P corrisponde a 14'); posizioni.push(14);break;
  case 'q': console.log('Q corrisponde a 15'); posizioni.push(15);break;
  case 'r': console.log('R corrisponde a 16'); posizioni.push(16);break;
  case 's': console.log('S corrisponde a 17'); posizioni.push(17);break;
  case 't': console.log('T corrisponde a 18'); posizioni.push(18);break;
  case 'u': console.log('U corrisponde a 19'); posizioni.push(19);break;
  case 'v': console.log('V corrisponde a 20'); posizioni.push(20);break;
  case 'z': console.log('Z corrisponde a 21'); posizioni.push(21);break;
}
}

console.log(posizioni)