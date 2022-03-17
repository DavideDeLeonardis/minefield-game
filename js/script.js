const difficulty = document.getElementById('difficulty');
const buttonPlay = document.getElementById('btn');
const grid = document.getElementById('grid');
const score = document.getElementById('score');
let checkable = true;
let counter = 0;

/**
 * 
 * @param   max  max grid's number
 * @returns      random numbers
 */
function getRandomNumber(max) {
    return random = Math.floor(Math.random() * (max - 1)) + 1;
}


/**
 * 
 * @param   max    max grid's number
 * @param   bombs  bombs' number
 * @returns        bombs' array
 */
function generateArray(max, bombs) {
    let arrayBombs = [];
    for (let index = 1; index <= bombs; index++) {
        let numberRand = getRandomNumber(max);
        while (arrayBombs.includes(numberRand)) { 
            numberRand = getRandomNumber(max);
        }
        arrayBombs.push(numberRand);
    }

    return arrayBombs;
};


/**
 * 
 * @param   col    columns and rows' number
 * @param   bombs  bombs' number
 * @returns        total number of squares
 */
function addElementsDom(col, bombs) {
    let numberSquare = Math.pow(col, 2);
    grid.innerHTML = '';
    score.innerHTML = 0;
    counter = 0;

    let array = generateArray(numberSquare, bombs);

    for (let index = 1; index <= numberSquare; index++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = square.style.width;
        square.append(index);
        grid.append(square);

        square.addEventListener('click', function () {
            if (array.includes(index)) {
                if (checkable) {
                    this.classList.add('square-clicked-wrong');
                }
                checkable = false;
                
                setTimeout( () => {
                    document.querySelector('.pop-up').classList.add('pop-up-clicked');
                }, 150);
            } else {
                if (checkable) {
                    this.classList.add('square-clicked-right');
                    counter += 1;
                }
                score.innerHTML = counter;
            }
        });
    }

    return numberSquare;
}


buttonPlay.addEventListener('click',
    function () {
        switch (difficulty.value) {
            case 'easy':
                addElementsDom(10, 5);
                break;
            case 'medium':
                addElementsDom(8, 10);
                break;
            case 'hard':
                addElementsDom(6, 15);
                break;
        }
    }
);
