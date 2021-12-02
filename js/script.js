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
                addElementsDom(10, 10, 1, 100);
                break;
            case 'medium':
                addElementsDom(9, 9, 1, 81);
                break;
            case 'hard':
                addElementsDom(7, 7, 1, 49);
                break;
        };
    }
);

/*
 *
 * FUNCTIONS
 *
 */

function addElementsDom(col, row, min, max) {
    let numberSquare = col * row;
    grid.innerHTML = '';

    let array = generateArray(min, max);
    console.log(array);

    for (let index = 1; index <= numberSquare; index++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(index);
        grid.append(square);

        square.addEventListener('click',
            function () {
                const element = this;
                element.classList.add('square-clicked');
                if (array.includes(index)) {
                    element.classList.add('square-clicked-wrong');
                    console.log(`HAI PERSO! Il tuo punteggio è ...`);
                } else {
                    element.classList.add('square-clicked-right');
                };
            }
        );
    };

    return numberSquare;
};

function generateArray(min, max) {
    let bombs = [];
    for (let index = 1; index <= 16; index++) {
        let numberRand = getRandomNumber(min, max);
        while (bombs.includes(numberRand)) { 
            numberRand = getRandomNumber(min, max);
        };
        bombs.push(numberRand);
    };

    return bombs;
};

function getRandomNumber(min, max) {
    return random = Math.floor(Math.random() * (max - min)) + min;
};