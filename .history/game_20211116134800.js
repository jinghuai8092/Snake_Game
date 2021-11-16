let lastRenderTime=0
const SNAKE_SPEED=2

function main(currentTime){
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000
    window.requestAnimationFrame(main)
    lastRenderTime=currentTime
    console.log(secondsSinceLastRender)
}
window.requestAnimationFrame(main)