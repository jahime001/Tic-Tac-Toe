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



// changeIndexClick.addEventListener('click', changeIndex)
// function changeIndex(){
//     if(i = 0){
//          i++
//     }else {
//          i--
//     }
//     console.log(playerColor)
// }








//FIRST ROW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//TOP LEFT
topLeft.addEventListener('click', topLeftColor)
function topLeftColor(){
    topLeft.style.backgroundColor = `${playerColor}`;
}
//TOP MIDDLE
topMiddle.addEventListener('click', topMiddleColor)
function topMiddleColor(){
    topMiddle.style.backgroundColor = `${playerColor}`;
}
//TOP RIGHT
topRight.addEventListener('click', topRightColor)
function topRightColor(){
    topRight.style.backgroundColor = `${playerColor}`;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//2ND ROW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//MIDDLE LEFT
middleLeft.addEventListener('click', middleLeftColor)
function middleLeftColor(){
    middleLeft.style.backgroundColor = `${playerColor}`;
}
//MIDDLE
middle.addEventListener('click', middleColor)
function middleColor(){
    middle.style.backgroundColor = `${playerColor}`;
}
//MIDDLE RIGHT
middleRight.addEventListener('click', middleRightColor)
function middleRightColor(){
    middleRight.style.backgroundColor = `${playerColor}`;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//3RD ROW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//BOTTOM LEFT
bottomLeft.addEventListener('click', bottomLeftColor)
function bottomLeftColor(){
    bottomLeft.style.backgroundColor = `${playerColor}`;
}
//BOTTOM MIDDLE
bottomMiddle.addEventListener('click', bottomMiddleColor)
function bottomMiddleColor(){
    bottomMiddle.style.backgroundColor = `${playerColor}`;
}
//BOTTOM RIGHT
bottomRight.addEventListener('click', bottomRightColor)
function bottomRightColor(){
    bottomRight.style.backgroundColor = `${playerColor}`;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        





