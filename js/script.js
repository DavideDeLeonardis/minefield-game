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
        if (difficulty.value == 'easy') {
            let row = 10;
            let col = 10;
            let numberSquare = row * col;
            grid.innerHTML = '';

            let bombs = [];
            for (let index = 1; index <= 16; index++) {
                let numberRand = getRandomNumber(1, 100);
                while (bombs.includes(numberRand)) { 
                    numberRand = getRandomNumber(1, 100);
                }
                bombs.push(numberRand);
            };

            let array = generateArray(1, 100);
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
                        if (array.includes(index)) {
                            element.style.backgroundColor = 'red';
                            element.style.color = 'white';
                            console.log(`HAI PERSO! Il tuo punteggio è ...`);
                        } else {
                            element.classList.add('square-clicked');
                        }
                    }
                );
            };
        } 
        else if (difficulty.value == 'medium') {
            let row = 9;
            let col = 9;
            let numberSquare = row * col;
            grid.innerHTML = '';

            let bombs = [];
            for (let index = 1; index <= 16; index++) {
                let numberRand = getRandomNumber(1, 81);
                while (bombs.includes(numberRand)) { 
                    numberRand = getRandomNumber(1, 81);
                }
                bombs.push(numberRand);
            };

            let array = generateArray(1, 81);
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
                        if (array.includes(index)) {
                            element.style.backgroundColor = 'red';
                            element.style.color = 'white';
                            console.log(`HAI PERSO! Il tuo punteggio è ...`);
                        } else {
                            element.classList.add('square-clicked');
                        }
                    }
                );
            };
        } else if (difficulty.value == 'hard') { 
            let row = 7;
            let col = 7;
            let numberSquare = row * col;
            grid.innerHTML = '';

            let bombs = [];
            for (let index = 1; index <= 16; index++) {
                let numberRand = getRandomNumber(1, 49);
                while (bombs.includes(numberRand)) { 
                    numberRand = getRandomNumber(1, 49);
                }
                bombs.push(numberRand);
            };

            let array = generateArray(1, 49);
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
                        if (array.includes(index)) {
                            element.style.backgroundColor = 'red';
                            element.style.color = 'white';
                            console.log(`HAI PERSO! Il tuo punteggio è ...`);
                        } else {
                            element.classList.add('square-clicked');
                        }
                    }
                );
            };
        };
    }
);


/*
 *
 * FUNCTIONS
 *
 */
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


// buttonPlay.addEventListener('click',
//     function () {
//         switch (difficulty.value) {
//             case 'easy':
//                 addElementsDom(10, 10);
//                 let array = generateArray(1, 100);
//                 console.log(array);

//                 // generateArray(1, 100);
//                 // console.log(generateArray(1, 100));

//                 break;
//             case 'medium':
//                 addElementsDom(9, 9);
//                 // generateArray(1, 81);
//                 // console.log(generateArray(1, 81));

//                 break;
//             case 'hard':
//                 addElementsDom(7, 7);
//                 // generateArray(1, 49);
//                 // console.log(generateArray(1, 49));

//                 break;
//         }
//     },
// );


// function addElementsDom(col, row) {
//     let numberSquare = col * row;
//     grid.innerHTML = '';
//     for (let index = 1; index <= numberSquare; index++) {
//         let square = document.createElement('div');
//         square.classList.add('square');
//         square.style.width = `calc(100% / ${col})`;
//         square.style.height = `calc(100% / ${row})`;
//         square.append(index);
//         grid.append(square);

//         square.addEventListener('click',
//             function () {
//                 const element = this;
//                 let array = generateArray(1, 100);

//                 if (array.includes(index)) {
//                     element.style.backgroundColor = 'red';
//                     element.style.color = 'white';
//                 } else {
//                     element.classList.add('square-clicked');
//                 }
//             }
//         );
//     };

//     return numberSquare;
// };