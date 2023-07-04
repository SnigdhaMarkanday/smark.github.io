const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content');

function PageTransitions(){
    for(let i=0;i< sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e) =>{
        const id =e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            const element=document.getElementById(id);
            element.classList.add('active')
        }
    } )
    const themeBtn =document.querySelector('.theme-btn');
    let isLightModeEnabled = localStorage.getItem('light-mode') === 'true';
    let element=document.body;
    

    updateTheme();
    themeBtn.addEventListener('click',() => {
        isLightModeEnabled = !isLightModeEnabled;
        localStorage.setItem('light-mode', isLightModeEnabled);

        // Immediately update the theme
        updateTheme();
        // element.classList.toggle('light-mode')
    })
    function updateTheme() {
        const currentTime = new Date().getHours();
        
        if (isLightModeEnabled) {
            // element.classList.add('light-mode');
            element.classList.toggle('light-mode')
          } else if (currentTime >= 6 && currentTime < 18) {
            element.classList.add('light-mode');
            
          } else {
            element.classList.remove('light-mode');
          }
      }
}

PageTransitions();