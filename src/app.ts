const main: HTMLElement = document.querySelector("main")!;
const form: HTMLFormElement = document.querySelector("form")!;
// const title: HTMLHeadingElement = document.querySelector("h1")!;
// title.addEventListener("click",askForNames);
let rank: [name: string, winCount: number];
const board = `<div id="board">
    <button id="first" class="tile"></button>
    <button id="second" class="tile"></button>
    <button id="third" class="tile"></button>
    <button id="fourth" class="tile"></button>
    <button id="fifth" class="tile"></button>
    <button id="sixth" class="tile"></button>
    <button id="seventh" class="tile"></button>
    <button id="eighth" class="tile"></button>
    <button id="nineth" class="tile"></button>
</div>`;

askForNames();

function askForNames(): void {
  form.addEventListener("submit", () => {
    const inputFirst = <HTMLInputElement>(
      document.querySelector("#first-player")!
    );
    const inputSecond = <HTMLInputElement>(
      document.querySelector("#second-player")!
    );
    const firstPlayer = inputFirst.value;
    const secondPlayer = inputSecond.value;
    console.log("Names added");
    startGame();
  });
}

function startGame() {
  // 1-X, 2-O
  let currentPlayer = "X";

  //clearing main
  main.innerHTML = "";

  //add board to main
  main.innerHTML = board;
    
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    //when clicked set to disabled
    tile.addEventListener("click", () => {
      tile.setAttribute("disabled", "");
      //mark tile
      tile.textContent = currentPlayer;
      //check if someone won
      if(checkIfWin(tiles)){
        main.innerHTML=`<p>Congrats, you have won!</p>`;
      }
      //change move to next player
      if (currentPlayer == "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      
    });
  });
}

function checkIfWin(tiles: NodeListOf<Element>):boolean {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    if (
        tiles[winningCombinations[i][0]].textContent !== "" &&
        tiles[winningCombinations[i][0]].textContent ===
        tiles[winningCombinations[i][1]].textContent &&
      tiles[winningCombinations[i][1]].textContent ===
        tiles[winningCombinations[i][2]].textContent
    ) {
      return true;
    }
  }
  return false;
}
