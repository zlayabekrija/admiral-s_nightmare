import './css/style.css';
import 'bootstrap';
import {
    renderBoard,
    renderShips
} from '../src/js/render'
import {
    Gameboard
} from '../src/js/Gameboard'
import {
    Ship
} from '../src/js/Ship';

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
};
let player = Gameboard(10);
    let cpu = Gameboard(10);

window.onload = () => {
    
    let playerShips = intstantiateShips(ships);
    let cpuShips = intstantiateShips(ships);
    let n = postionShips(player, playerShips)
    let f = postionShips(cpu, cpuShips);
    renderBoard(document.getElementById('gameplay'), n);
    renderShips(ships, document.getElementById('ships'))
    renderBoard(document.getElementById('cpu'), f)
}

document.addEventListener('click', e => {
    if (e.target.dataset.x && event.target.dataset.y && e.target.parentElement.id === 'cpu') {
        e.target.textContent = 'X'; 
    }
})
const intstantiateShips = ships => {
    let allShips = [];
    for (let ship in ships) {
        allShips.push(Ship(ships[ship].name, ships[ship].size));
    }
    return allShips;
}
const postionShips = (gameboard, ships) => {
    for (let i = 0; i < ships.length; i++) {
        let randX = Math.floor(Math.random() * 10);
        let randY = Math.floor(Math.random() * 10);
        let pos = Math.floor(Math.random() * 10) % 2 === 0 ? 'h' : 'v';
        gameboard.position(pos, ships[i], randX, randY)
    }
    return gameboard;
}