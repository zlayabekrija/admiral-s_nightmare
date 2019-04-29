import './css/style.css';
import 'bootstrap'; 
import {render} from '../src/js/render'


window.onload = () => {
    render(document.getElementById('gameplay'));
    render(document.getElementById('cpu'))
}

document.addEventListener('click', e => {
    if(e.target.dataset.x && event.target.dataset.y){
        e.target.textContent = 'X';
    }
})