const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const firstplayer = document.querySelector(".p-1");
const secondplayer = document.querySelector(".p-2");
const buttonroll = document.querySelector(".roll");
buttonroll.addEventListener("click", () => {
  startGame();
});

const result = document.querySelector(".result");

// StartGame function
function startGame() {
  const diceno1 = Math.floor(Math.random() * 6 + 1);
  const diceno2 = Math.floor(Math.random() * 6 + 1);

  img1.src = `/img/${diceno1}.png`;
  img2.src = `/img/${diceno2}.png`;

  FinalResult(diceno1, diceno2);
}

// If else

function FinalResult(diceno1, diceno2) {
  if (diceno1 > diceno2) {
    result.innerHTML = "Winner is Player one ";
  } else if (diceno1 < diceno2) {
    result.innerHTML = "Winner is Player Two";
  } else {
    result.innerHTML = "Draw";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const first = prompt("Player1 Name:-");
  const second = prompt("Player2 Name:-");

  firstplayer.innerHTML = first;
  secondplayer.innerHTML = second;
});
