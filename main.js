// Il computer deve generare 16 numeri casuali compresi nel range della griglia: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba -
// la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const gridContainer = document.querySelector(".grid-container");

// come a lezione bisogna creare una griglia, stavolta di 10x10, usando un ciclo.
function createGrid(CelleX, CelleY) {

    // siccome deve essere 10x10, xcells * ycells
    const celletotali = CelleX * CelleY;
    console.log(celletotali);

    // creo il ciclo per fare ogni cella e collego le celle a html/css
    for (let i = 1; i <= celletotali; i++) {
    const celle = document.createElement("div");
    celle.classList.add("celle");
    celle.textContent = i;

    // creo l'array con le bombe
    var bombe = [];
    for (let n=1, j=16; n<=j; n++) {
    let numerobomba = Math.round(Math.random() * 100);
        if (!bombe.includes(numerobomba)) {
            bombe.push(numerobomba);
    }
} console.log(bombe);

    // conto i click che mi serviranno per il punteggio
    let numeroclick = 0;

    // aggiungo l'evento al click: se bomba, rosso, altrimenti azzurro
    celle.addEventListener("click", function(){ 
        numeroclick += 1;
        console.log(numeroclick);
        if (bombe.includes(i)) {
            celle.style.backgroundColor = 'red';
            document.getElementById("youlost").style.display = 'block';
            document.getElementById("tryagain").style.display = 'block';
            document.getElementById("clicknumber") === numeroclick;
        } else {
        celle.style.backgroundColor = "lightblue";
    }
    }
    );

    // appendo le celle al gridContainer
    gridContainer.append(celle);
    }


}
// funzione che crea la griglia di 10cellex10celle
createGrid(10, 10);