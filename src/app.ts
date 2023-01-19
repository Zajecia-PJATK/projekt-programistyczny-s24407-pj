const main: HTMLElement = document.querySelector("main")!;
const form: HTMLFormElement = document.querySelector("form")!;
// const title: HTMLHeadingElement = document.querySelector("h1")!;
// title.addEventListener("click",askForNames);
let rank: [{ name: string; winCount: number }];
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

async function askForNames(): Promise<void> {
  form.addEventListener("submit", async () => {
    const inputFirst = <HTMLInputElement>(
      document.querySelector("#first-player")!
    );
    const inputSecond = <HTMLInputElement>(
      document.querySelector("#second-player")!
    );
    const firstPlayer = inputFirst.value;
    const secondPlayer = inputSecond.value;
    console.log("Names added");
    const game: string = await startGame();
    if (game === "draw") {
    } else {
      let winner = { name: game, winCount: 1 };
      let index = rank.findIndex((p) => p.name === winner.name);
      if (index !== -1) {
        rank[index].winCount++;
      } else {
        rank.push(winner);
      }
    }
  });
}

async function startGame(): Promise<string> {
  return new Promise((resolve, reject) => {
    // 1-X, 2-O
    let currentPlayer = "X";

    //clearing main
    main.innerHTML = "";

    //add board to main
    main.innerHTML = board;

    const tiles = document.querySelectorAll(
      ".tile"
    ) as NodeListOf<HTMLButtonElement>;
    const tilesArray = Array.from(tiles);
    tiles.forEach((tile) => {
      //when clicked set to disabled
      tile.addEventListener("click", () => {
        tile.setAttribute("disabled", "");
        //mark tile
        tile.textContent = currentPlayer;
        //check if someone won
        if (checkIfWin(tiles)) {
          main.innerHTML = `<p>Congrats, you have won!</p>`;
          resolve(currentPlayer);
        }
        //check if draw
        if (tilesArray.every((button) => button.disabled)) {
          main.innerHTML = `<p>Draw!</p>`;
          resolve("draw");
        }
        //change move to next player
        if (currentPlayer == "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
      });
    });
  });
}

function checkIfWin(tiles: NodeListOf<Element>): boolean {
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
