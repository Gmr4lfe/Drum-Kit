// for(var i = 0; i<document.querySelectorAll('.drum').length; i++){
//   document.querySelectorAll('.drum')[i].addEventListener("click",handleClick);
// }

var i = 0;
while (i < document.querySelectorAll('.drum').length) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function() { //couldnt work with the function already defined
    var buttonInnerHTML = this.innerHTML; //Usage of a anonymous function was able to get it to work
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  i++;
}

document.addEventListener("keydown", function(event) { //"event" is a Global parameter
  makeSound(event.key);
  buttonAnimation(event.key)
});


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;
    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    default:
      console.log(innerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
