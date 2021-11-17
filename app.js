const defaultTrailColor = '#333333';

function makeSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = defaultTrailColor;
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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const gridSizeInput = document.getElementById('gridSize');
const resetBtn = document.getElementById('reset');
const rainbowToggle = document.getElementById('rainbowToggle');

gridSizeInput.addEventListener('change', () => {
  makeGrid(gridSizeInput.value);
});

resetBtn.addEventListener('click', () => {
  makeGrid(gridSizeInput.value);
  rainbowToggle.checked = false;
});

rainbowToggle.addEventListener('change', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      if (rainbowToggle.checked) {
        square.style.backgroundColor = getRandomColor(); 
      } else {
        square.style.backgroundColor = defaultTrailColor; 
      }
    });
  });
});

makeGrid(16);