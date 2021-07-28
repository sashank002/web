// alert("hello");
let randomNumber;
let randomChosenColor;
let buttonColors = ["red", "blue", "green", "yellow"];
let gameSeq = [];
let userClickSeq = [];
let level = 0;
let gameStarted = 1;


// <--------    adding event listener to the keyboard to start or restart the game  ----------->
document.addEventListener("keydown", function (event) {
    if (gameStarted == 1) {
        nextSeq();
        gameStarted = 0;
    }

})



// <--------         function for generate random sequence for game             ----------->
function nextSeq() {
    userClickSeq = [];      // when level is new then userclickSeq should be start from beginning  
    level++;   // 

    document.querySelector("#level-title").textContent = "level " + level;



    randomNumber = Math.round(Math.random() * 3);  // creat random Number between 0 to 3
    randomChosenColor = buttonColors[randomNumber];
    gameSeq.push(randomChosenColor);               // pushing color to gameSequence 
    // console.log(gameSeq);

    let randomButton = document.querySelector("#" + randomChosenColor);


    // to flash button
    randomButton.classList.add("blink");
    setInterval(function () {
        randomButton.classList.remove("blink")
    }, 400);


    // to play sound 
    playSound(randomChosenColor);


}



// <--------         adding evenet listener to buttons          ----------->

for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        // getting button id 
        let element = this.id;

        // flashing button when button get clickd 
        animatePress(element);

        // playing sound
        playSound(element);

        userClickSeq.push(element);
        checkAns(userClickSeq.length - 1);

    });
}


// <--------    function to play different sound  for button of different color    ----------->
function playSound(element) {
    // playing audio based on buttonId when it get clicked
    let audio = new Audio("sounds/" + element + ".mp3");
    audio.play();
}


// <--------         function to animate button when it is clicked           ----------->
function animatePress(currentBtn) {

    let randomButton = document.querySelector("#" + currentBtn);

    randomButton.classList.add("pressed");
    setInterval(function () {
        randomButton.classList.remove("pressed")
    }, 100);
}


// <-------                      function to continue the  game                      ---------->

function checkAns(currentColor) {
    // console.log("checkAns ni andar");
    if (gameSeq[currentColor] === userClickSeq[currentColor]) {
        // console.log("hello");
        if (JSON.stringify(gameSeq) === JSON.stringify(userClickSeq)) {
            setTimeout(function () {
                nextSeq();
            }, 700);
        }

    }

    else {
        document.querySelector("#level-title").textContent = "wrong answer!, Press any key to restart the game ";
        level = 0;
        gameStarted = 1;
        gameSeq = [];
        let wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        document.querySelector("body").classList.add("game-over");
        setTimeout(function () {
            document.querySelector("body").classList.remove("game-over");

        }, 300);
    }
}