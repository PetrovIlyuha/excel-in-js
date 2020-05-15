const CODES = {
  A: 65,
  Z: 91,
};
function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}
function createCol(col) {
  return `
    <div class="column">
      ${col}
    </div>
  `;
}
function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index}</div>  
      <div class="row-data">${content}</div>  
    </div>
  `;
}
function toChar(el, index) {
  return String.fromCharCode(CODES.A + index);
}
function toColumn(el) {
  return createCol(el);
}
export function createTable(rowsCount = 150) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];
  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('');
  rows.push(createRow('', cols));
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(createCell).join('');
    rows.push(createRow(i + 1, cells));
  }
  return rows.join('');
}
