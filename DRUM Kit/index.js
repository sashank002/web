var numberOfButtons = document.querySelectorAll(".drum").length;  // number of drum buttons

for(var i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function  () {

        var btnChar = this.innerHTML;

        playDrum(btnChar);

       animation(btnChar);

    });

}


// The below code is an example of anonymus function
// document.querySelector("button").addEventListener("click",function  () {
//     alert("hello");
// }
// );


// adding listener to keyword 

document.addEventListener("keydown",function(event) {
    // alert("hello , tame key dabavi che 😂")
    playDrum(event.key);
    animation(event.key);
})





function playDrum(btnChar) {
    switch (btnChar) {
        case "w":  var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
        case "a":  var kickBass = new Audio("sounds/kick-bass.mp3");
                    kickBass.play();
                    break;
        case "s":  var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
        case "d":  var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
        case "j":  var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
        case "k":  var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
        case "l":  var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
        default:    console.log(btnChar);
            break;
    }
}



// function for animation 

function animation(btnChar) {
    var activekey = document.querySelector("."+btnChar); // document.querySelector(".w"); here we are getting button with the help of each individual class given to buttons

    activekey.classList.add("pressed");     // we are adding pessed class (which is in css) to the button 

    setTimeout(function () {                              // this function will wait for 0.1s and 
        activekey.classList.remove("pressed");            // then exevute the anonymous functoin 
    },100);                                               // declare in the arguments

}