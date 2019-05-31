const Gameboard = (board) => {
  let ships = {}
  const gameboard = () => {
    let arr = []
    for (let i = 0; i < board; i++) {
      arr.push(new Array(board).fill('0'))
    }
    return arr
  }
  let playBoard = gameboard()
  // positioning
  const horizontal = (ship, startingX, startingY) => {
    if (startingX + ship.size > playBoard.length) {
      return false
    }
    if (invalidH(startingX, startingY, playBoard, ship.size)) return false
    for (let i = 0; i < ship.size; i++) {
      playBoard[startingY][startingX + i] = ship.name
    }
    ships[ship.name] = ship
    return true
  }
  const vertical = (ship, startingX, startingY) => {
    if (startingY + ship.size > playBoard.length) {
      return false
    }
    if (invalidV(startingX, startingY, playBoard, ship.size)) return false
    for (let i = 0; i < ship.size; i++) {
      playBoard[startingY + i][startingX] = ship.name
    }
    ships[ship.name] = ship
    return true
  }
  const position = (direction, ship, startingX, startingY) => {
    return direction === 'h' ? horizontal(ship, startingX, startingY) : vertical(ship, startingX, startingY)
  }
  const invalidH = (x, y, arr, compare) => {
    for (let i = 0; i < compare; i++) {
      if (arr[y][x + i] !== '0') return true
    }
    return false
  }
  const invalidV = (x, y, arr, compare) => {
    for (let i = 0; i < compare; i++) {
      if (arr[y + i][x] !== '0') return true
    }
    return false
  }
  // attacking
  const recieveAttack = (coorX, coorY) => {
    if (playBoard[coorX][coorY] === '0') {
      playBoard[coorX][coorY] = 'M'
      return false
    } else if (playBoard[coorX][coorY] === 'X' || playBoard[coorX][coorY] === 'M') {
      return undefined
    } else {
      ships[playBoard[coorX][coorY]].hit()

      if (ships[playBoard[coorX][coorY]].isSunk()) {
        delete ships[playBoard[coorX][coorY]]
      }
      playBoard[coorX][coorY] = 'X'
      return true
    }
  }

  const allSunk = (ships) => {
    return Object.keys(ships).length === 0
  }
  return {
    playBoard,
    position,
    recieveAttack,
    allSunk,
    ships
  }
}

export {
  Gameboard
}
