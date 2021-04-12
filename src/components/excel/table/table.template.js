const CODE = {
  A: 65,
  Z: 90,
}

function createCell(cell) {
  return `
    <div class="cell" contenteditable="">${cell}</div>
    `
}

function createCol(el) {
  return `
    <div class="column">${el}</div>
    `
}

function newRow(index, content) {
  return `
    <div class="row">
    <div class="row-info">${index ? index : ''}</div>
    <div class="row-data">${content}</div>
     
</div>
    `
}

function createChar(_, index) {
  return String.fromCharCode(CODE.A + index)
}

export function createTable(rowsCount = 36) {
  const char = CODE.Z - CODE.A + 1
  const rows = []
  const cols = new Array(char)
      .fill('')
      .map(createChar)
      .map(createCol)
      .join('');


  rows.push(newRow(null, cols))
  for (let i = 1; i <= rowsCount; i++) {
    const cell = new Array(char)
        .fill('')
        .map(createCell)
        .join('');
    rows.push(newRow(i, cell))
  }
  return rows.join('')
}
