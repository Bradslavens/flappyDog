
// * set up game div
// launch obsticles from the right
// spawn at random heights
// when space bar is clicked player jumps over obsticles


// controls
const JUMP_HEIGHT = 10
const RANGE = JUMP_HEIGHT
const JUMP_SPEED = 1000
const JUMP_FACTOR = 20
const JUMP_DELAY = 50
let jumper = 0
let jumpInterval = 14


let player = document.getElementById("player")
window.addEventListener('keydown', handleKeydown)
let jumpId = 0
let regex = /\d+/
function handleKeydown(e){
    if(e.code === "Space"){
        if(jumpId !== 0){ clearInterval(jumpId)}
        let offset = window.getComputedStyle(player, null).getPropertyValue("bottom").match(regex)
        if(offset <= 50) offset = 50
        offset = Number(offset)
        let i = -10
        let speed = 0
        jumpId = setInterval(() => {
            if(speed%10 == 0){
                let heightIncrement = ((-(i**2))) + RANGE**2 + offset
                player.style.bottom = `${heightIncrement}px`
                i++
            }
            
            speed++
        }, jumpInterval);
    }

}
