import './home.css';
import dinoeat from '../assets/dinoeat.jpg'

/*
<div class="title">RestoSaurio</div>
<div><img src="./assets/dinoeat" alt=""></div>
<div class="intro">
Here at RestoSaurio we bring the most prehistoric dishes, just like the ancestor did it
                (Disclaier: these dishes might or might not be accurate)
</div>

*/

content=document.getElementById('content')
const makeTitle=()=>{
    let title=document.createElement('div')
    title.classList.add('title')
    title.innerHTML='<strong>RestoSaurio</strong>'
    return title
}
const makeImg=()=>{
    let imgDiv=document.createElement('div')
    let img=document.createElement('img')
    img.src=dinoeat
    imgDiv.appendChild(img)

    return imgDiv
}
const makeIntro=()=>{
    let intro= document.createElement('div')
    intro.innerText='Here at RestoSaurio we bring the most prehistoric dishes, just like the ancestor did it(Disclaier: these dishes might or might not be accurate)'
    intro.classList.add('intro')
    return intro
}

const setHome =()=>{
    let content=document.getElementById('content')
    content.appendChild(makeTitle())
    content.appendChild(makeImg())
    content.appendChild(makeIntro())

}

export default setHome