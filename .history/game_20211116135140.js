import {update as updateSnake ,SNAKE_SPEED} from './snake'
let lastRenderTime=0

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

}

function draw(){

}