
const render = (master) => {
    let field = document.createElement('div');
    field.classList.add('field');
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let field = document.createElement('div');
            field.classList.add('field','btn','btn-outline-success');
            field.dataset.x = i;
            field.dataset.y = j;
            master.append(field);
        }
    }
}

export {render}