
const renderBoard = (master,board) => {
    for(let i = 0; i < board.playBoard.length; i++){
        for(let j = 0; j < board.playBoard.length; j++){
            let field = document.createElement('div');
            field.classList.add('field','btn','btn-outline-success');
            field.dataset.x = i;
            field.dataset.y = j;
            field.textContent = board.playBoard[i][j]
            master.append(field);
        }
    }
}
const renderShips = (ships,parent) => {
    
    for(let ship in ships){
        let shipDiv = document.createElement('div');
        let name = document.createElement('p');
        let initalWidth = getComputedStyle(shipDiv, null).width;
        shipDiv.id = ships[ship].name;
        shipDiv.classList.add('ships');
        name.textContent = ships[ship].name;
        shipDiv.style.width = `${initalWidth + ships[ship].size * 30}px`;
        shipDiv.append(name);
        parent.append(shipDiv);
    }
}

export {renderBoard, renderShips}