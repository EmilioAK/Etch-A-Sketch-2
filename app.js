const gridSizeInput = document.getElementById('gridSize');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeSquare() {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    if (document.getElementById('rainbowToggle').checked) {
      square.style.backgroundColor = getRandomColor(); 
    } else {
      square.style.backgroundColor = '#333333'; 
    }
  });
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
}

gridSizeInput.addEventListener('change', () => {
  makeGrid();
});

document.getElementById('reset').addEventListener('click', () => {
  makeGrid();
});

makeGrid(16);