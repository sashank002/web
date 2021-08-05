// alert("hello");

const section1 = document.querySelector(".player--0");
const section2 = document.querySelector(".player--1");

const dice = document.querySelector(".dice");

const newButton = document.querySelector(".btn--new");
const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");

const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");

let c, activePlayer, playing;
let s = [];

const init = function () {

    // initializing all the variables
    c = 0;
    s = [0, 0];
    activePlayer = 0;
    playing = true;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    dice.setAttribute("src", "");

    section1.classList.remove("player--winner");
    section2.classList.remove("player--winner");
    section1.classList.add("player--active");
    section2.classList.remove("player--active");

}


init();

function diceGenerator() {
    return Math.trunc(Math.random() * 6) + 1;
}

const switchPlayers = function () {
    c = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = c;
    document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
    activePlayer = activePlayer == 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
};

rollButton.addEventListener("click", function () {
    // when no is won then playing is true
    if (playing) {
        // generating random number for our game
        let diceNumber = diceGenerator();
        console.log(diceNumber);

        // displaying dice
        dice.setAttribute("src", `images/dice-${diceNumber}.png`);

        // if diceNumber is 1 then switch players 
        if (diceNumber == 1) {
            switchPlayers();
        }
        // else increase the current score
        else {
            c = c + diceNumber;
            document.querySelector(`#current--${activePlayer}`).textContent = c;
        }


    }

});

holdButton.addEventListener("click", function () {

    if (playing) {
        // displaying acitive player's score
        s[activePlayer] = s[activePlayer] + c;
        document.querySelector(`#score--${activePlayer}`).textContent = s[activePlayer];

        // for winning the game
        if (s[activePlayer] >= 50) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            dice.src = "";
        }
        // else continue the game 
        else {
            switchPlayers();
        }

    }



});

// when we click new game button 
newButton.addEventListener("click", init);