const sections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.controlls');
const sectButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content')
const codeDisplay = document.getElementById("code-display");

function transition() {
    for(let i = 0; i < sectButton.length; i++) {
        sectButton[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-button');
            currentButton[0].className = currentButton[0].className.replace('active-button', '');
            this.className += ' active-button'; //refering to this function
        })
    }


        allSections.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if(id){//removes selected from other buttons
                sectButtons.forEach((btn) => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')

                sections.forEach((section) => {
                    section.classList.remove('active')
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        }) 
        //Toggle button (theme)
        const themeBtn = document.querySelector('.theme-btn')
        themeBtn.addEventListener('click', () => {
            let element = document.body;
            element.classList.toggle('light-mode')
        })

        
        document.querySelector("a").addEventListener("click", function(e) {
            e.preventDefault();
            
            const xhr = new XMLHttpRequest();
            xhr.open("GET", this.getAttribute("href"));
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    codeDisplay.textContent = xhr.responseText;
                }
            };
            xhr.send();
        });

}
transition();
