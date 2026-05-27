"use strict";

const restart = document.querySelector(".restart");
const game = document.querySelector(".game");
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const show = document.querySelector(".show");
const result = document.querySelector(".result");
const counter = document.querySelector(".counter");
const guess = document.querySelector(".guess");

const random = Math.trunc(Math.random() * 100) + 1;
console.log(random);

const finalResult = function () {
  {
    result.textContent = `Hurray 🥳, You Won, Correct Guess.`;
    document.body.style.backgroundColor = "green";
    show.textContent = random;
  }
};

function disableCheckButton() {
  check.disabled = true;
}

check.addEventListener("click", function () {
  if (
    (number.textContent = parseInt(number.value)) &&
    number.textContent > 0 &&
    number.textContent < 101
  ) {
    counter.textContent++;
    if (counter.textContent < 5) {
      guess.textContent = `Guess ${5 - counter.textContent} more times`;
      if (number.textContent > random) {
        result.textContent = `Try low number.`;
      } else if (number.textContent < random) {
        result.textContent = `Try high number.`;
      } else {
        finalResult();
        disableCheckButton();
      }
    } else if (counter.textContent === "5") {
      guess.textContent = `Guess Over`;
      disableCheckButton();

      if (number.textContent != random) {
        counter.textContent = "00";
        guess.textContent = "STATUS";
        result.textContent = `Sorry😪, You Lost, Try Again`;
        document.body.style.backgroundColor = "red";
      } else {
        finalResult();
      }
    }
  }
  document.querySelector(".restart").addEventListener("click", function () {
    window.location.reload();
  });
});
