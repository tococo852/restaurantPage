import './about.css';
import cave from '../assets/cave.png';
/*
<div class="aboutImg"><img src="./assets/cave.png" alt=""></div>
            <div class="aboutUs">
                <div class="aboutUsTitle">AboutUs</div>
                <div class="aboutUsInfo">we are this and that</div>
                <div class="aboutUsDir">we are here and there</div>
            </div>
 */
const makeAboutText=(description, direction)=>{
    let aboutUs=document.createElement('div')
    aboutUs.classList.add('aboutUs')


    //to append to aboutUS
    let aboutUsTitle=document.createElement('div')
    let aboutUsInfo=document.createElement('div')
    let aboutUsDir=document.createElement('div')
    aboutUsTitle.classList.add('aboutUsTitle')
    aboutUsInfo.classList.add('aboutUsInfo')
    aboutUsDir.classList.add('aboutUsDir')

    aboutUsTitle.innerHTML='About US'
    aboutUsInfo.innerHTML=description
    aboutUsDir.innerHTML=direction

    //appending
    aboutUs.appendChild(aboutUsTitle)
    aboutUs.appendChild(aboutUsInfo)
    aboutUs.appendChild(aboutUsDir)

    return aboutUs
}

const makeAboutImg=()=>{
    let imgContainer=document.createElement('div')
    imgContainer.classList.add('aboutImg')

    let img=document.createElement('img')
    img.src=cave
    
    imgContainer.appendChild(img)

    return imgContainer
}


const setAbout =()=>{
    let description='Here at restoSaur we bring back the traditions from the ancient era in our scuff cooking, there techniques are so old they make us a legacy of humanity pretty much (disclarmer, something being old does not mean is better)'
    let direction='You can find us on this forgotten cave somewhere in chine, we even were on the news, here we have our restaurant underground along with many original dinosaurs that suvived the great calamity'
    
    content=document.getElementById('content')
    content.appendChild(makeAboutImg())
    content.appendChild(makeAboutText(description,direction))



}

export default setAbout