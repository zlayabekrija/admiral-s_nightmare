const Gameboard = (board) => {
  let horizonShips = {};
  let vShips = {};
  const gameboard = () => {
    let arr = [];
    for (let i = 0; i < board; i++) {
      arr.push(new Array(board).fill('0'))
    }
    return arr;
  }
  let playBoard = gameboard();
  const horizontal = (ship, startingX, startingY) => {
    if (startingX + ship.size.length > playBoard.length) {
      return false;
    }
    if (invalidH(startingX, startingY, playBoard, ship.size)) return false;
    for (let i = 0; i < ship.size.length; i++) {

      playBoard[startingY][startingX + i] = ship.name

    }
    horizonShips[ship.name] = ship;
    return true;
  }
  const vertical = (ship, startingX, startingY) => {
    if (startingY + ship.size.length > playBoard.length) {
      return false;
    }
    if (invalidV(startingX, startingY, playBoard, ship.size)) return false;
    for (let i = 0; i < ship.size.length; i++) {
      playBoard[startingY + i][startingX] = ship.name
    }
    vShips[ship.name] = ship;
    return true
  }
  const position = (direction, ship, startingX, startingY) => {
    return direction === 'h' ? horizontal(ship, startingX, startingY) : vertical(ship, startingX, startingY)
  }
  const recieveAttack = (coorX, coorY) => {
    if (playBoard[coorX][coorY] === '0') {
      return playBoard[coorX][coorY] = 'M'
    } else if (playBoard[coorX][coorY] === 'X') {
      return undefined;
    } else {
      return horizonShips[playBoard[coorX][coorY]] !== undefined ? horAttack(coorX, coorY) : verAttack(coorX, coorY)
    }
  }
  const horAttack = (coorX, coorY) => {
    let shipHit = horizonShips[playBoard[coorX][coorY]];
    let pos = calculateShot('h', shipHit, coorX, coorY)
    shipHit.hit(pos, shipHit.size)
    if (shipHit.isSunk(shipHit.size)) {
      console.log('Sank');
      delete horizonShips[shipHit.name];
    }
    return playBoard[coorX][coorY] = 'X'
  }
  const verAttack = (coorX, coorY) => {
    let shipHit = vShips[playBoard[coorX][coorY]];
    let pos = calculateShot('v', shipHit, coorX, coorY)
    shipHit.hit(pos, shipHit.size)
    if (shipHit.isSunk(shipHit.size)) {
      console.log('Sank');
      delete vShips[shipHit.name];
    }
    return playBoard[coorX][coorY] = 'X'
  }
  const calculateShot = (direction, ship, coorX, coorY) => {
    return direction === 'h' ? calcPlace(ship.size, coorY) : calcPlace(ship.size, coorX);
  }
  const calcPlace = (ship, coor) => {
    return (coor) % ship.length
  }
  const invalidH = (x, y, arr, compare) => {
    for (let i = 0; i < compare.length; i++) {
      if (arr[y][x + i] !== '0') return true;
    }
    return false;
  }
  const invalidV = (x, y, arr, compare) => {
    for (let i = 0; i < compare.length; i++) {
      if (arr[y + i][x] !== '0') return true;
    }
    return false;
  }
  const allSunk = (hors, vert) => {
    return Object.keys(hors).length === 0 && Object.keys(vert).length === 0;
  }
  return {
    playBoard,
    position,
    horizonShips,
    vShips,
    recieveAttack,
    allSunk
  }
}

export {
  Gameboard
}