import {update as updateSnake ,draw as drawSnake,SNAKE_SPEED} from './snake.js'
import {update as updateFood ,draw as drawFood,SNAKE_SPEED} from './food.js'

let lastRenderTime=0
const gameBoard=document.getElementById('game-board')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender < 1/SNAKE_SPEED) return
    console.log('RENDER')
    lastRenderTime=currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
}

function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
}