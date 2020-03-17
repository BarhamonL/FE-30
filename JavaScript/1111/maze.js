`use strict`;

const maze = document.querySelector('#maze');
const indicator = document.querySelector('#indicator');
const blocks = document.querySelectorAll('#maze .block');
const start = document.querySelector('#maze .start');
const finish = document.querySelector('#maze .finish');

const alert = document.querySelector('#alert');
const alertText = alert.querySelector('h2');
const alertButton = alert.querySelector('button');

let isPlaying = false;
let isFail = false;

const handleStart = () => {
  if (!isPlaying) {
    isPlaying = true;
    isFail = false;

    indicator.textContent = 'Play';
  }
};

const handleFinish = () => {
  if (isPlaying && !isFail) {
    isPlaying = false;

    alertText.textContent = 'You won!!!';
    alertText.classList.add('success');
    alert.classList.add('visible');

    indicator.textContent = 'Stop';
  }
};

const handleMazeMouseOut = () => {
  if (isPlaying) {
    isPlaying = false;

    indicator.textContent = 'Stop';
  }
};

const handleBlock = () => {
  if (isPlaying && !isFail) {
    isPlaying = false;
    isFail = true;

    alertText.textContent = 'You loose!!! :(';
    alertText.classList.add('error');
    alert.classList.add('visible');

    indicator.textContent = 'Stop';
  }
};

const handleCloseAlert = () => {
  alert.classList.remove('visible');
  alertText.classList.remove('success');
  alertText.classList.remove('error');
};

// по одному
start.addEventListener('mouseover', handleStart);
finish.addEventListener('mouseover', handleFinish);
maze.addEventListener('mouseleave', handleMazeMouseOut);
alertButton.addEventListener('click', handleCloseAlert);

// для группы элементов
// blocks.forEach(block => block.addEventListener('mouseover', handleBlock));

// используя всплытие событий
maze.addEventListener('mouseover', e => {
  if (e.target.classList.contains('block')) {
    handleBlock();
  }
});
