import './menu.css';
import burger from '../assets/burger.jpeg'
/*
<div class="menuCard">
                <div class="menuImage"><img src="./assets/burger.jpeg" alt=""></div>
                <div class="itemText">
                    <div class="itemName">rockborger</div>
                    <div class="itemDescription">100% rocks with a borger</div>
                    <div class="itemPrice">3 sparkly peebles</div>
                </div>
            </div>
*/

const buildCard=(name, des, price,img)=>{
    let menuCard=document.createElement('div')
    menuCard.classList.add('menuCard')

    //menu image
    let menuImage= document.createElement('div')
    menuImage.classList.add('menuImage')

    let image=document.createElement('img')
    image.src=img

    menuImage.appendChild(image)
    //item text
    let itemText=document.createElement('div')
    itemText.classList.add('itemText')

    //item text components
    let itemName=document.createElement('div')
    let itemDescription=document.createElement('div')
    let itemPrice=document.createElement('div')

    itemName.classList.add('itemName')
    itemDescription.classList.add('itemDescription')
    itemPrice.classList.add('itemPrice')

    itemName.innerText=name
    itemDescription.innerText=des
    itemPrice.innerText=price

    itemText.appendChild(itemName)
    itemText.appendChild(itemDescription)
    itemText.appendChild(itemPrice)

    menuCard.appendChild(menuImage)
    menuCard.appendChild(itemText)

    return menuCard


}

const appendMenuCard=(parent, name, des,price, img )=>{
    parent.appendChild(buildCard(name,des,price,img))
}

const setMenu =()=>{

    let menu= document.getElementById('content')

    appendMenuCard(menu,'RockBorger', 'from 100% natural rock cows', '3 sparks', burger)
    appendMenuCard(menu,'Rocksalad', 'from 100% natural rock plans', '1 sparks', burger)
    appendMenuCard(menu,'fossil fries', 'atleasts 1 million year old fossils', '2 sparks', burger)
    appendMenuCard(menu,'ancient beer', 'made with rocks and water, also know as just water', '5 sparks', burger)
    appendMenuCard(menu,'IceAgeCream', 'might containt frozen mamut chunks', '7 sparks', burger)
    appendMenuCard(menu,'Trex special', 'combowith fossil fries for a trex lunch', '3 sparks', burger)
    

    console.log('menu')
}

export default setMenu