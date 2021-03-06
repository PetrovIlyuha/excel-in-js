import { toKebabCase } from '../components/table/table.functions';

export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1).fill('').map((_, index) => start + index);
}

export function matrix($target, $current) {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);
  const ids = cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
  return ids;
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
}

export function isEqual(prevState, newState) {
  if (typeof prevState === 'object' && typeof newState === 'object') {
    return JSON.stringify(prevState) === JSON.stringify(newState);
  }
  return prevState === newState;
}

export function toInlineStyles(styles = {}) {
  return Object.keys(styles)
    .map((key) => `${toKebabCase(key)}: ${styles[key]}`)
    .join(';');
}

export const debounce = (fn, wait) => {
  let timeout;
  return function (...args) {
    const laterCalledFn = () => {
      clearTimeout(timeout);
      // eslint-disable-next-line no-invalid-this
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(laterCalledFn, wait);
  };
};

export const clone = (obj) => {
  return Object.assign({}, { ...obj });
};

export const preventDefault = (event) => {
  event.preventDefault();
};
