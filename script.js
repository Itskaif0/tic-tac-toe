console.log("hello");

let music = new Audio("./Musics/music.mp3");
let turnMusic = new Audio("./Musics/ting.mp3");
let gameoverMusic = new Audio("./Musics/gameover.mp3");
let turn = "X";
let gameover = false;

let boxtext = document.getElementsByClassName('boxtext');




/**    Game Reset Logic     **/

let forReset = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const gameReset = () => {
   let reset = document.getElementById("reset");
   reset.addEventListener("click", (e) => {
     forReset.forEach((e) => {
       boxtext[e[0]].innerText = " ";
       boxtext[e[1]].innerText = " ";
       boxtext[e[2]].innerText = " ";
     });
     document.querySelector("img").style.width = "0vw";
    let info = document.getElementsByClassName("info")
    turn = changeTurn();
    gameover = false
    if (!gameover) {
     info[0].innerText = `Turn for ${turn}`;
    }
         
   });
 };

gameReset();



// Function to Change the Turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};



// Function to check for a win

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " has Won the Game";
      gameover = true;
      gameoverMusic.play();
      turnMusic.pause();
      document.querySelector("img").style.width = "10vw";
    }
  });
  
};



// Game Logic

let box = document.getElementsByClassName("box");
Array.from(box).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName(
          "info"
        )[0].innerText = `Turn for ${turn}`;
      }
    }
  });
});


