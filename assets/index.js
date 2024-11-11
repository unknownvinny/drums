// var btnA = document.querySelectorAll(".drum")[0];
// var btnS = document.querySelectorAll(".drum")[1];
// var btnD = document.querySelectorAll(".drum")[2];
// var btnF = document.querySelectorAll(".drum")[3];
// var btnJ = document.querySelectorAll(".drum")[4];
// var btnK = document.querySelectorAll(".drum")[5];
// var btnL = document.querySelectorAll(".drum")[6];

// btnA.addEventListener("click", handleClick);
// btnS.addEventListener("click", handleClick);
// btnD.addEventListener("click", handleClick);
// btnF.addEventListener("click", handleClick);
// btnJ.addEventListener("click", handleClick);
// btnK.addEventListener("click", handleClick);
// btnL.addEventListener("click", handleClick);

var drumBtn = document.querySelectorAll(".drum").length;

for(var i=0; i<drumBtn; i++) {

    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        handleClick(buttonInnerHTML);


    });
    
}

    document.addEventListener("keypress", function(event){
        handleClick(event.key);
    });
function handleClick(key) {
    
    switch (key) {
        
        case "a":
            var crash = new Audio('./assets/sounds/crash.mp3');
            crash.play();
            break;
        case "s":
            var kick = new Audio('./assets/sounds/kick-bass.mp3');
            kick.play();
            break;
        case "d":
            var snare = new Audio('./assets/sounds/snare.mp3');
            snare.play();
            break;
        case "f":
            var tom1 = new Audio('./assets/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('./assets/sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('./assets/sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('./assets/sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);
        
    }

}

function makeSound(key) {

}