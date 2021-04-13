const CODE = {
  A: 65,
  Z: 90,
}

function createCell(_, cell) {
  return `
    <div class="cell" data-col="${cell}" contenteditable=""></div>
    `
}

function createCol(el, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">${el}
        <div class="col-resize" data-resize="col"></div>
    </div>
    `
}

function newRow(index, content) {
  const resizer = index ? `<div class="row-resize" data-resize="row"></div>`:''
  return `
    <div class="row" data-type="resizable">
    <div class="row-info">${index ? index : ''}
        ${resizer}
    </div>
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
