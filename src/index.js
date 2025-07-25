import './styles.css';
import setHome from './Home/home.js'
import setAbout from './about/about.js'
import setMenu from './menu/menu.js'

const changeClass= (newClass,builder)=>{
    const content = document.getElementById('content');
    let currClass= content.className
    if(currClass!=newClass){
        content.innerHTML=''
        content.classList.replace(currClass, newClass);
        builder()
    }
}

document.addEventListener('click', (e)=>{
    if(e.target.tagName==='BUTTON'){
         if(e.target.id==='home'){
            changeClass('home', setHome)

    
        }
        if(e.target.id==='menu'){
            changeClass('menu',setMenu)

        }
        if(e.target.id==='about'){
            changeClass('about',setAbout)
        }
    }
});

   window.addEventListener("DOMContentLoaded", function() {
        // on load, sethome should run by itself so the page is not blank
        
        setHome()

    }, false);