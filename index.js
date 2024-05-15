const container = document.getElementById("container");

const ROWS_COLUMNS = 64;

const numberOfSquares = ROWS_COLUMNS * ROWS_COLUMNS;
console.log(numberOfSquares);

for (i = 0; i < numberOfSquares; i++) {
  let gridDiv = document.createElement("div");
  gridDiv.classList.add("divGrid", i);
  // gridDiv.style.flexBasis = Math.floor(100 / ROWS_COLUMNS) + "%";
  gridDiv.style.flexBasis = 100 / ROWS_COLUMNS + "%";
  // gridDiv.textContent = `${i}`;
  container.appendChild(gridDiv);
  // console.log(gridDiv);
}
