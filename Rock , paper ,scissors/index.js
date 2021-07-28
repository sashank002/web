// alert("hii")

let computerSeq = ["rock", "paper", "scissor"];
let comAns;
let userAns;
let div;
let userImg;
let comImg;
let result;






// <----------     adding event listerner to the 3 images         --------------->
for (let i = 0; i < document.querySelectorAll("img").length; i++) {
    // console.log(i);
    document.querySelectorAll("img")[i].addEventListener("click", function () {
        userAns = this.id;

        console.log(userAns);
        generateComAns();

        createNewEle();
        removeOldEle();
        annonceWinner();
        FinalFrontEnd();
    })
}





// <----------     generating computer choice from rps         --------------->

function generateComAns() {
    let randomNumner = Math.floor(Math.random() * 3);
    comAns = computerSeq[randomNumner];
    console.log(randomNumner);
    // console.log("compter generated ans is " + comAns);
}





// <---------creating new elements that should be displayed after user clicks any button ---------->
function createNewEle() {
    div = document.querySelector(".div2");

    userImg = document.createElement("img");
    userImg.src = "images/" + userAns + ".jpeg";
    userImg.classList.add("user-ans");


    result = document.createElement("h2");
    result.classList.add("heading");

    // let newText = document.createElement("h3");
    // newText.innerHTML = "press any key to play again";

    comImg = document.createElement("img");
    comImg.src = "images/" + comAns + ".jpeg";
    comImg.classList.add("com-ans");
}





// <----------     removing default 3 images         --------------->
function removeOldEle() {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}




// <----------     checking who is winner !!!!         --------------->
function annonceWinner() {

    if (userAns == comAns) {
        result.innerHTML = "Draw Match !";
        result.style.color = 'yellow';
    }
    else {
        if (comAns == "paper") {

            if (userAns == "rock") {
                result.innerHTML = "You lose !"
                result.style.color = 'red';

            }
            else {
                result.innerHTML = "You Won !"
                result.style.color = 'green';

            }
        }
        else if (comAns == "rock") {

            if (userAns == "paper") {
                result.innerHTML = "You Won !"
                result.style.color = 'green';

            }
            else {
                result.innerHTML = "You lose !"
                result.style.color = 'red';

            }
        }
        else {
            if (userAns == "paper") {
                result.innerHTML = "You lose !"
                result.style.color = 'red';

            }
            else {
                result.innerHTML = "You Won !"
                result.style.color = 'green';

            }
        }
    }



}




// <----------     showing final result on the screen         --------------->
function FinalFrontEnd() {
    div.appendChild(userImg);
    div.appendChild(result);
    div.appendChild(comImg);
}