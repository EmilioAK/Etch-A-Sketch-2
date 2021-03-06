const gridSizeInput = document.getElementById('gridSize');
const container = document.querySelector('.container');

function getRandomColor() {
  // Math.random() produces a fraction in range `[0, 1)`, then we multiply
  // it by the range of colors (3 bytes), thus getting a uniform random value.
  const randomColor = Math.floor(Math.random() * 0x1000000);
  // We perform zero-padding by prepending a string of sufficient length,
  // and then taking a substring from the end.
  const padded = ('000000' + randomColor.toString(16)).substr(-6);
  return '#' + padded;
}

function makeDiv(divClass) {
  const div = document.createElement('div');
  div.classList.add(divClass);
  return div;
}

function makeGrid() {
  const container = document.querySelector('.container');
  container.innerHTML = ''; // Clears the previous value if its run again
  side = gridSizeInput.value;
  for (let i = 0; i < side; i++) {
    const row = makeDiv('row');
    for (let i = 0; i < side; i++) {
      const square = makeDiv('square');
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

// Handle `mouseover` events on the container with capture=true, which allows
// us to process `mouseover` events on all squares without attaching an event
// handler to each square individually.
container.addEventListener('mouseover', (event) => {
  const element = event.target;
  // Only process squares in this event listener.
  if (!element || !element.matches('div.square')) {
    return;
  }
  event.stopPropagation();

  if (document.getElementById('rainbowToggle').checked) {
    element.style.backgroundColor = getRandomColor();
  } else {
    element.style.backgroundColor = '#333333';
  }
}, true);

gridSizeInput.addEventListener('change', () => {
  makeGrid();
});

document.getElementById('reset').addEventListener('click', () => {
  makeGrid();
});

makeGrid(16);
