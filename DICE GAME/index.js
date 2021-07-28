
// Creating var that genarate random values 
var randomNumber1;
randomNumber1 = Math.floor(Math.random()*6)+1;

// setting img1 to random
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

// doing same as above for 2nd image
var randomNumber2;
randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");



// changing the title to display who won 
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "😎 Player 1 wins!";
} 
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins! ✌";
}
else {
    document.querySelector("h1").textContent = "draw !";
}   