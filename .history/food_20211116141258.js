let food ={x:0,y:0}

export function update(){

}
export function draw(gameBoard){
snakeBody.forEach(segment=>{
    const foodElement=document.createElement('div')
    foodElement.style.gridRowStart=food.x
    foodElement.style.gridColumnStart=food.y
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement)
})}