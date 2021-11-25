const gridSizeInput = document.getElementById('gridSize');

function getRandomColor() {
  // Math.random() produces a fraction in range `[0, 1)`, then we multiply
  // it by the range of colors (3 bytes), thus getting a uniform random value.
  const randomColor = Math.floor(Math.random() * 0x1000000);
  // We perform zero-padding by prepending a string of sufficient length,
  // and then taking a substring from the end.
  const padded = ('000000' + randomColor.toString(16)).substr(-6);
  return '#' + padded;
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