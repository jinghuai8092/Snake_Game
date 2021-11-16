let food ={x:0,y:0}

export function update(){

}
export function draw(gameBoard){
snakeBody.forEach(segment=>{
    const foodElement=document.createElement('div')
    foodElement.style.gridRowStart=segment.x
    foodElement.style.gridColumnStart=segment.y
    foodElement.classList.add('snake');
    gameBoard.appendChild(foodElement)
})}