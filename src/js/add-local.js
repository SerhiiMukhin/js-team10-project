//addLocal(arr) додає і перезаписує , приймає масив обєктів
//getLocalOne(id) віддає масив з 1 елемента , потрібно передати id елемента

const KEY = 'data-current';

function addLocal(arr) {
  try {
    localStorage.setItem(KEY, JSON.stringify(arr));
    return true;
  } catch {
    return false;
  }
}

function getLocalOne(id) {
  try {
    if (localStorage.getItem(KEY)) {
      const arr = JSON.parse(localStorage.getItem(KEY));
      return arr.filter(e => e.id === id);
    }
    return undefined;
  } catch {
    return false;
  }
}

export { addLocal, getLocalOne };
