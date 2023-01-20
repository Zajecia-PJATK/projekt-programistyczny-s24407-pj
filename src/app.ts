const main: HTMLElement = document.querySelector("main")!;
const form: HTMLFormElement = document.querySelector("form")!;
 const title: HTMLHeadingElement = document.querySelector("h1")!;
 title.addEventListener("click",restart);
let rank: [{ name: string; winCount: number }];
let lastTile: HTMLButtonElement;
let firstPlayer: string;
let secondPlayer: string;
const board = `<div id="board" class="fade-in">
    <button class="tile"></button>
    <button class="tile"></button>
    <button class="tile"></button>
    <button class="tile"></button>
    <button class="tile"></button>
    <button class="tile"></button>
    <button class="tile"></button>
    <button class="tile"></button>
    <button class="tile"></button>
    <button id="undo"><i class="bi bi-arrow-counterclockwise"></i></button>
</div>`;

askForNames();

  //add winner to rank
function updateRank(name:string):void{
  if (name === "draw") {
  } else {
    if (name == "X") {
      name = firstPlayer;
    } else {
      name = secondPlayer;
    }
    let winner = { name: name, winCount: 1 }; //something wrong here
    let index = rank.findIndex((p) => p.name === winner.name);
    if (index !== -1) {
      rank[index].winCount++;
    } else {
      rank.push(winner);
    }
  }
}

async function askForNames(): Promise<void> {
  form.addEventListener("submit", async () => {
    const inputFirst = <HTMLInputElement>(
      document.querySelector("#first-player")!
    );
    const inputSecond = <HTMLInputElement>(
      document.querySelector("#second-player")!
    );
    firstPlayer = inputFirst.value;
    secondPlayer = inputSecond.value;
    console.log("Names added");
     startGame();
  });
}

async function startGame(): Promise<void> {
 
    // 1-X, 2-O
    let currentPlayer = "X";

    let isUndoPossible = false;
    //clearing main
    main.innerHTML = "";

    //add board to main
    main.innerHTML = board;

    const tiles = document.querySelectorAll(
      ".tile"
    ) as NodeListOf<HTMLButtonElement>;
    const tilesArray = Array.from(tiles);
    //Undo function
    document.querySelector("#undo")?.addEventListener("click", () => {
      if (isUndoPossible) {
        lastTile.textContent = "";
        lastTile.removeAttribute("disabled");
        if (currentPlayer == "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
        isUndoPossible = false;
      }
    });
    tiles.forEach((tile) => {
      //when clicked set to disabled
      tile.addEventListener("click", () => {
        if (currentPlayer == "X") {
          tile.innerHTML = `<i class="bi bi-x-lg"></i>`;
        } else {
          tile.innerHTML = `<i class="bi bi-circle"></i>`;
        }
        isUndoPossible = true;
        tile.setAttribute("disabled", "");
        lastTile = tile;
        //mark tile
        tile.value = currentPlayer;
        tile.setAttribute("class", currentPlayer);
        //check if someone won
        if (checkIfWin(tiles)) {
          main.innerHTML = `<div class="win-msg">Congrats, you have won!</p>`;
          restart();
        }
        //check if draw
        if (tilesArray.every((button) => button.disabled)) {
          main.innerHTML = `<div class="win-msg">Draw!</div>`;
          restart();
        }
        //change move to next player
        if (currentPlayer == "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
      });
    });
    
  };


//add event listeners and start the game again
function restart() {
  main.innerHTML += `<button id="play-again" <i class="bi bi-fast-forward"></i></button>`
  main.querySelector("#play-again")!.addEventListener("click",startGame);
}

function checkIfWin(tiles: NodeListOf<HTMLButtonElement>): boolean {
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
      tiles[winningCombinations[i][0]].value &&
      tiles[winningCombinations[i][0]].value ===
        tiles[winningCombinations[i][1]].value &&
      tiles[winningCombinations[i][1]].value ===
        tiles[winningCombinations[i][2]].value
    ) {
      return true;
    }
  }
  return false;
}
