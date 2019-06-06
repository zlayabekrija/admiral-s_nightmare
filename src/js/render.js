const renderBoard = (master, board) => {
  for (let i = 0; i < board.playBoard.length; i++) {
    for (let j = 0; j < board.playBoard.length; j++) {
      let field = document.createElement('div')
      field.classList.add('field', 'btn', 'btn-outline-success')
      field.dataset.x = i
      field.dataset.y = j
      if (board.playBoard[i][j] !== '0' && board.playBoard[i][j] !== 'M' && master.id !== 'cpu') {
        field.classList.add('red')
      }
      if (board.playBoard[i][j] === 'M') {
        field.classList.add('blue')
      }
      if (board.playBoard[i][j] === 'X') {
        field.classList.add('black')
      }
      master.append(field)
    }
  }
}
const renderShips = (ships, parent) => {
  for (let ship in ships) {
    let shipDiv = document.createElement('div')
    let name = document.createElement('p')
    let initalWidth = getComputedStyle(shipDiv, null).width
    shipDiv.id = ships[ship].name
    shipDiv.classList.add('ships')
    name.textContent = ships[ship].name
    shipDiv.style.width = `${initalWidth + ships[ship].size * 50}px`
    shipDiv.append(name)
    parent.append(shipDiv)
  }
}
const legend = (parent) => {
  const icons = { ship: 'red', miss: 'blue', hit: 'black' }
  const text = document.createElement('p')
  text.classList.add('legend')
  text.textContent = 'Legends for colors: '
  parent.append(text)
  for (let icon in icons) {
    let img = document.createElement('div')
    img.classList.add('img-legend')
    img.textContent = icon
    img.style.backgroundColor = icons[icon]
    img.style.width = '50px'
    img.style.height = '50px'
    parent.append(img)
  }
}
const clearBoard = (parent) => {
  parent.innerHTML = ''
}

export {
  renderBoard,
  renderShips,
  clearBoard,
  legend
}
