// alert("hello");

// our initial score 
let score = document.querySelector(".score").textContent;

// for highscore of the current game 
let highscore = 0;


// creating our secret number for game 
let secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secret;

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // if user has not input any value
    if (!guess) {
        document.querySelector(".message").textContent = "guesss the number first!";
    }

    // if use input and secret number is equal 
    else if (guess === secret) {
        document.querySelector(".message").textContent = "😎 You Won!";
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    else if (guess != secret) {
        if (score > 1) {
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector(".message").textContent = guess > secret ? "Too High !!" : "Too Low !!";
        }
        // for loosing the game 
        else {
            document.querySelector(".message").textContent = " you loose the game ";
            document.querySelector(".score").textContent = 0;
        }
    }

    // // if user input is higher then secret number 
    // else if (guess > secret) {
    //     if (score > 1) {
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //         document.querySelector(".message").textContent = "Too High !!";
    //     }
    //     // for loosing the game 
    //     else {
    //         document.querySelector(".message").textContent = " you loose the game ";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }

    // // if user input is lower then secret number 
    // else if (guess < secret) {
    //     if (score > 1) {
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //         document.querySelector(".message").textContent = "Too Low !!";
    //     }
    //     else {
    //         document.querySelector(".message").textContent = " you loose the game ";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }

});


document.querySelector(".again").addEventListener("click", function () {

    // window.location.reload();

    score = 20;


    secret = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = secret;


    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem";

});
