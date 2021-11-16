function makeSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    square.classList.add('trail');
  });
  return square;
}

function makeRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

function makeGrid(side) {
  const container = document.querySelector('.container');
  container.innerHTML = ''; // Clears the previous value if its run again
  for (let index = 0; index < side; index++) {
    const row = makeRow();
    for (let index = 0; index < side; index++) {
      const square = makeSquare();
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

const gridSizeInput = document.getElementById('gridSize');
const resetBtn = document.getElementById('reset');

gridSizeInput.addEventListener('change', () => {
  makeGrid(gridSizeInput.value);
});
resetBtn.addEventListener('click', () => {
  makeGrid(gridSizeInput.value);
});

makeGrid(16);