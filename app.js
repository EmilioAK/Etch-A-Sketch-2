const gridSizeInput = document.getElementById('gridSize');
const resetBtn = document.getElementById('reset');
const rainbowToggle = document.getElementById('rainbowToggle');

function makeSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  return square;
}

function makeRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

function makeGrid() {
  const container = document.querySelector('.container');
  container.innerHTML = ''; // Clears the previous value if its run again
  side = gridSizeInput.value;
  for (let index = 0; index < side; index++) {
    const row = makeRow();
    for (let index = 0; index < side; index++) {
      const square = makeSquare();
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  createMouseoverTrail();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createMouseoverTrail() {
  // Checks the state of the toggle and sets rainbow mode accordingly
  // Adds an event listner to every square

  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      if (rainbowToggle.checked) {
        square.style.backgroundColor = getRandomColor(); 
      } else {
        square.style.backgroundColor = '#333333'; 
      }
    });
  }); 
}

gridSizeInput.addEventListener('change', () => {
  makeGrid();
});

resetBtn.addEventListener('click', () => {
  makeGrid();
});

rainbowToggle.addEventListener('change', () => {
  createMouseoverTrail();
});

makeGrid(16);