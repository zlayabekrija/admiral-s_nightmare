import './css/style.css'
import 'bootstrap'
import {
  renderBoard,
  renderShips,
  clearBoard,
  legend
} from '../src/js/render'
import {
  Gameboard
} from '../src/js/Gameboard'
import {
  Ship
} from '../src/js/Ship'
import {
  CPU
} from '../src/js/CPU'
let ships = {
  regent: {
    name: 'Regent',
    size: 1
  },
  galaxy: {
    name: 'Galaxy',
    size: 2
  },
  summit: {
    name: 'Summit',
    size: 3
  },
  edge: {
    name: 'Edge',
    size: 4
  },
  oasis: {
    name: 'Oasis',
    size: 5
  }
}
let player = Gameboard(10)
let cpu = Gameboard(10)

window.onload = () => {
  let playerShips = intstantiateShips(ships)
  let cpuShips = intstantiateShips(ships)
  let playerS = postionShips(player, playerShips)
  let cpuS = postionShips(cpu, cpuShips)
  renderBoard(document.getElementById('gameplay'), playerS)
  renderShips(ships, document.getElementById('ships'))
  legend(document.getElementById('ships'))
  renderBoard(document.getElementById('cpu'), cpuS)
  let start = Gameplay(player, cpu)

  document.addEventListener('click', e => {
    while (!start.gameOver()) {
      if (e.target.dataset.x && event.target.dataset.y && e.target.parentElement.id === 'cpu') {
        if (cpu.recieveAttack(Number(e.target.dataset.x), Number(e.target.dataset.y)) === undefined) {
          break
        }
        clearBoard(document.getElementById('cpu'))
        renderBoard(document.getElementById('cpu'), cpuS)
        start.cpuAttack()
        clearBoard(document.getElementById('gameplay'))
        renderBoard(document.getElementById('gameplay'), playerS)
      } else {
        break
      }
    }
  })
}

const intstantiateShips = ships => {
  let allShips = {}
  for (let ship in ships) {
    allShips[ship] = Ship(ships[ship].name, ships[ship].size)
  }
  return allShips
}

const postionShips = (gameboard, ships) => {
  for (let ship in ships) {
    let randX = Math.floor(Math.random() * 10)
    let randY = Math.floor(Math.random() * 10)
    let pos = Math.floor(Math.random() * 10) % 2 === 0 ? 'h' : 'v'
    let valid = gameboard.position(pos, ships[ship], randX, randY)
    while (!valid) {
      valid = gameboard.position(pos, ships[ship], Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    }
  }
  return gameboard
}

const Gameplay = (player, cpu) => {
  const cpuPlay = CPU()
  const gameOver = () => {
    if (player.allSunk(player.ships) || cpu.allSunk(cpu.ships)) {
      alert('Game over')
      return true
    }
    return false
  }
  const playOn = (attack, x, y) => attack.recieveAttack(x, y)
  const playerAttack = () => {
    document.addEventListener('click', e => {
      if (e.target.dataset.x && event.target.dataset.y && e.target.parentElement.id === 'cpu') {
        cpu.recieveAttack(Number(e.target.dataset.x), Number(e.target.dataset.y))
        return true
      }
    })
  }
  const cpuAttack = () => {
    let a = cpuPlay.play()
    player.recieveAttack(a[0], a[1])
  }
  document.addEventListener('click', e => {
    if (e.target.textContent === 'Restart') {
      document.location.reload()
    }
  })
  return {
    gameOver,
    playOn,
    playerAttack,
    cpuAttack
  }
}
