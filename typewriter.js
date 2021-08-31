"use strict";
let singleLetter = document.querySelector(".typewritten").textContent.trim();
document.querySelector(".typewritten").textContent = "";
let maxNumber;
let iterator;
let character;
init();

function init() {
  maxNumber = singleLetter.length;
  iterator = 0;
  loop();
}
function loop() {
  console.log("loop", iterator);
  console.log(character);
  character = singleLetter[iterator];
  document.querySelector(".typewritten").textContent += character;
  iterator++;
  if (iterator < maxNumber) {
    setTimeout(loop, 500);
  }
}
