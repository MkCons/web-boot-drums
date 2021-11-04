
// add alert to the first button
// document.querySelector("button").addEventListener("click", handleClick);

var buttons = document.querySelectorAll("button.drum");

buttons.forEach(
  button =>
    button.addEventListener("click", handleClick)
);

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function handleClick() {
  playSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

function playSound(key) {
    var audioFile;
    switch (key) {
      case "w":
          audioFile = "sounds/tom-1.mp3";
        break;
      case "a":
          audioFile = "sounds/tom-2.mp3";
        break;
      case "s":
          audioFile = "sounds/tom-3.mp3";
        break;
      case "d":
          audioFile = "sounds/tom-4.mp3";
        break;
      case "j":
          audioFile = "sounds/snare.mp3";
        break;
      case "k":
          audioFile = "sounds/crash.mp3";
        break;
      case "l":
          audioFile = "sounds/kick-bass.mp3";
        break;
      default:
    }
    if(audioFile !== undefined) {
        var audio = new Audio(audioFile);
        audio.play();
    }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
      activeButton.classList.remove("pressed");
  }, 100);

}
