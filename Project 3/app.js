const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover');
  }
});

const Square = document.querySelector('#Square');

Square.addEventListener('mouseenter', () => {
  if (!Square.classList.contains('hover')) {
    Square.classList.add('hover');
  }
});

Square.addEventListener('mouseleave', () => {
  if (Square.classList.contains('hover')) {
    Square.classList.add('hover');
  }
});

const traingle = document.querySelector('#triangle');

traingle.addEventListener('mouseenter', () => {
  if (traingle.classList.contains('hover')) {
    traingle.classList.add('hover');
  }
});

traingle.addEventListener('mouseleave', () => {
  if (traingle.classList.contains('hover')) {
    traingle.classList.add('hover');
  }
})