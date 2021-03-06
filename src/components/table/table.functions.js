export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === 'cell';
}

export function nextSelector(key, { col, row }) {
  const MIN_COL = 0;
  const MIN_ROW = 1;
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++;
      break;
    case 'Tab':
    case 'ArrowRight':
      col++;
      break;
    case 'ArrowLeft':
      col = col - 1 < MIN_COL ? MIN_COL : col - 1;
      break;
    case 'ArrowUp':
      row = row - 1 < MIN_ROW ? MIN_ROW : row - 1;
      break;
  }
  return `[data-id="${row}:${col}"]`;
}

export const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
