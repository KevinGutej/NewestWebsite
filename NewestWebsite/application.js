const sections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.controlls');
const sectButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content')

function transition() {
    for(let i = 0; i < sectButton.length; i++) {
        sectButton[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-button');
            currentButton[0].className = currentButton[0].className.replace('active-button', '');
            this.className += ' active-button'; //refering to this function
        })
    }
}
transition()();
