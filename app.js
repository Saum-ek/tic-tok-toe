let cells = document.querySelectorAll(".cell");
let declare = document.querySelector(".declare");
let reset = document.querySelector(".reset");

let gamewin = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

let WinningIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnO = false;

function printX(index) {

    if (this.innerHTML != "" || !gameActive) return;
    if (turnO) {
        this.innerHTML = "O";
        turnO = false;

    } else {
        this.innerHTML = "X";
        turnO = true;
    }

    gamewin[index] = this.innerHTML;
    checkWin();
}

cells.forEach((cell, index) => {

    cell.addEventListener("click", () => printX.call(cell, index));
});

function checkWin() {

    for (let i = 0; i < WinningIndex.length; i++) {
        let [a, b, c] = WinningIndex[i];
        if (gamewin[a] && gamewin[a] === gamewin[b] && gamewin[a] === gamewin[c]) {
            declare.textContent = `${gamewin[a]} is winner`;
            gameActive = false;
            return;
        } else if (!gamewin.includes("")) {
            declare.textContent = `Match Draw`;
            gameActive = false;
            return;
        }
    }

}

function resetGame() {
    gamewin = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((cell) =>
        (cell.innerHTML = "")
    );
    declare.textContent = "";
}

reset.addEventListener("click", resetGame);