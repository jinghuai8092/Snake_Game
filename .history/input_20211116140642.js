let inputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case "ArrowUp":
            inputDirection = { x: 0, y: -1 }
            break
        case "ArrowUp":
            inputDirection = { x: 0, y: -1 }
            break
        case "ArrowUp":
            inputDirection = { x: 0, y: -1 }
            break
        case "ArrowUp":
            inputDirection = { x: 0, y: -1 }
            break
    }
})
export function getInputDirection() {
    return inputDirection
}