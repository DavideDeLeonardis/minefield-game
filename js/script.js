// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
//     abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
//     altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. 
//     La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. 
//     Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

const difficulty = document.getElementById('difficulty');
const buttonPlay = document.getElementById('btn');
const grid = document.getElementById('grid');

buttonPlay.addEventListener('click',
    function () {
        switch (difficulty.value) {
            case 'easy':
                addElementsDom(10, 10);
                // generateArray(1, 100);
                console.log(generateArray(1, 100));

                break;
            case 'medium':
                addElementsDom(9, 9);
                // generateArray(1, 81);
                console.log(generateArray(1, 81));

                break;
            case 'hard':
                addElementsDom(7, 7);
                // generateArray(1, 49);
                console.log(generateArray(1, 49));

                break;
        }
    },
);






/*
 * FUNCTIONS
 *
 */
function addElementsDom(col, row) {
    let numberSquare = col * row;
    grid.innerHTML = '';
    for (let index = 1; index <= numberSquare; index++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(index);
        grid.append(square);

        let array = generateArray(1, 100);
        square.addEventListener('click',
            function () {
                const element = this;
                if (array.includes(parseInt(index))) {
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                } else {
                    this.classList.add('square-clicked');
                }
            }
        );
    };

    return numberSquare;
};

function getRandomNumber(min, max) {
    return random = Math.floor(Math.random() * (max - min)) + min;
};

function generateArray(min, max) {
    let bombs = [];
    for (let index = 1; index <= 16; index++) {
        let numberRand = getRandomNumber(min, max);
        while (bombs.includes(numberRand)) { 
            numberRand = getRandomNumber(min, max);
        }
        bombs.push(numberRand);
    }
    return bombs;
};

