const main: HTMLElement = document.querySelector("main")!;
const form: HTMLFormElement = document.querySelector("form")!;
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

form.addEventListener("submit", () => {
  const inputFirst = <HTMLInputElement>document.querySelector("#first-player")!;
  const inputSecond = <HTMLInputElement>(
    document.querySelector("#second-player")!
  );
  const firstPlayer = inputFirst.value;
  const secondPlayer = inputSecond.value;
  console.log("Names added");
  startGame(firstPlayer, secondPlayer);
});

function startGame(firstPlayer: string, secondPlayer: string) {
  // 1-X, 2-O
  let currentPlayer = "X";

  //clearing main
  main.innerHTML = "";

  //add board to main
  main.innerHTML = board;

  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      tile.setAttribute("disabled", "");
      tile.textContent = currentPlayer;
      currentPlayer = "O";
    });
  });
}
