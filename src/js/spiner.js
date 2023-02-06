const spiner = document.querySelector('.spiner');

function spinerOff() {
  spiner.classList.add('hidden');
}

function spinerOn() {
  spiner.classList.remove('hidden');
}

export { spinerOff, spinerOn };
