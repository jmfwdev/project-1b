const getLengthOfLetters = document.querySelectorAll(".logo path");
console.log(getLengthOfLetters);

for (let i = 0; i < getLengthOfLetters.length; i++) {
  console.log(`letter ${i} is ${getLengthOfLetters[i].getTotalLength()}`);
}

// witch once animation is done

const introDiv = document.querySelector(".animation-intro");
const openbody = document.querySelector(".open-after-intro");

document.addEventListener("DOMContentLoaded", () => {
  introDiv.addEventListener("animationend", () => {
    introDiv.style.display = "none";
    openbody.style.display = "block";
  });
});

//javascript for center line

let path = document.querySelector(".container-line path");
let pathLength = path.getTotalLength();
console.log(path);
path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  // waht % down is it
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  let scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  // length to ofset the lenght
  let drawLength = pathLength * scrollPercentage;
  // scroll reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  const target = document.querySelectorAll(".scroll");

  let index = 0,
    lenght = target.length;
  for (index; index < lenght; index++) {
    let pos = window.pageYOffset * target[index].dataset.rate;
    if (target[index].dataset.direction === "vertical") {
      target[index].style.transform = "translate3d(0px, " + pos + "px, 0px)";
    } else {
      let posX = window.pageYOffset * target[index].dataset.ratex;
      let posY = window.pageYOffset * target[index].dataset.ratey;
      target[index].style.transform =
        "translate3d(" + posX + "px, " + posY + "px, 0px)";
    }
  }
});
