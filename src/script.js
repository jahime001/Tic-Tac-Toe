let topLeft = document.querySelector('#top-left')
let topMiddle = document.querySelector('#top-middle')
let topRight = document.querySelector('#top-right')
let middleLeft = document.querySelector('#middle-left')
let middle = document.querySelector('#middle')
let middleRight = document.querySelector('#middle-right')
let bottomLeft = document.querySelector('#bottom-left')
let bottomMiddle = document.querySelector('#bottom-middle')
let bottomRight = document.querySelector('#bottom-right')
let changeIndexClick = document.querySelector('.board-buttons')

let activeButton = []

let color = ['red','blue']
// let i = 0
let playerColor = color[0]


changeIndexClick.addEventListener('click', changeIndex)
function changeIndex(){
    if(playerColor == color[0]){
         playerColor = color[1]
    }else {
         playerColor = color[0]
    }
    console.log(playerColor)
}











//FIRST ROW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//TOP LEFT
topLeft.addEventListener('click', topLeftColor)
function topLeftColor(){
        if (activeButton.includes('top-left')){
        alert('button already selected')
    } else {
        activeButton.push('top-left')
        topLeft.style.backgroundColor = `${playerColor}`;
    }
    console.log(activeButton)
}
//TOP MIDDLE
topMiddle.addEventListener('click', topMiddleColor)
function topMiddleColor(){
    if(activeButton.includes('top-middle')){
        alert('button already selected')
    }else {
    activeButton.push('top-middle')
    topMiddle.style.backgroundColor = `${playerColor}`;
    console.log(activeButton)
    }
}
//TOP RIGHT
topRight.addEventListener('click', topRightColor)
function topRightColor(){
    if (activeButton.includes('top-right')){
        alert('button already selected')
    } else {
    activeButton.push('top-right')
    topRight.style.backgroundColor = `${playerColor}`;
    console.log(activeButton)
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//2ND ROW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//MIDDLE LEFT
middleLeft.addEventListener('click', middleLeftColor)
function middleLeftColor(){
    if (activeButton.includes('middle-left')){
        alert('button already selected')
    } else {
    activeButton.push('middle-left')
    middleLeft.style.backgroundColor = `${playerColor}`;
        console.log(activeButton)
    }
}
//MIDDLE
middle.addEventListener('click', middleColor)
function middleColor(){
    if (activeButton.includes('middle')){
        alert('button already selected')
    } else {
    activeButton.push('middle')
    middle.style.backgroundColor = `${playerColor}`;
    console.log(activeButton)
    }
}
//MIDDLE RIGHT
middleRight.addEventListener('click', middleRightColor)
function middleRightColor(){
    if (activeButton.includes('middle-right')){
        alert('button already selected')
    } else {
    activeButton.push('middle-right')
    middleRight.style.backgroundColor = `${playerColor}`;
    console.log(activeButton)
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//3RD ROW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//BOTTOM LEFT
bottomLeft.addEventListener('click', bottomLeftColor)
function bottomLeftColor(){
    if (activeButton.includes('bottom-left')){
        alert('button already selected')
    } else {
    activeButton.push('bottom-left')
    bottomLeft.style.backgroundColor = `${playerColor}`;
    console.log(activeButton)
    }
}
//BOTTOM MIDDLE
bottomMiddle.addEventListener('click', bottomMiddleColor)
function bottomMiddleColor(){
    if (activeButton.includes('bottom-middle')){
        alert('button already selected')
    } else {
    activeButton.push('bottom-middle')
    bottomMiddle.style.backgroundColor = `${playerColor}`;
    console.log(activeButton)
    }
}
//BOTTOM RIGHT
bottomRight.addEventListener('click', bottomRightColor)
function bottomRightColor(){
    if (activeButton.includes('bottom-right')){
        alert('button already selected')
    } else {
    activeButton.push('bottom-right')
    bottomRight.style.backgroundColor = `${playerColor}`;
    console.log(activeButton)
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        



