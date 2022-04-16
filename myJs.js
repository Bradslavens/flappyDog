
// * set up game div
// launch obsticles from the right
// spawn at random heights
// when space bar is clicked player jumps over obsticles


// controls
const JUMP_HEIGHT = 10
const JUMP_SPEED = 1000
const JUMP_FACTOR = 20
let jumpInterval = 16.66


let player = document.getElementById("player")
window.addEventListener('keydown', handleKeydown)
let jumpId = 0
let regex = /\d+/
function handleKeydown(e){
    if(e.code === "Space"){
        if(jumpId !== 0){ clearInterval(jumpId)}
        let offset = window.getComputedStyle(player, null).getPropertyValue("bottom").match(regex)
        offset = Number(offset)
        let i = -10
        jumpId = setInterval(() => {
            i+= .25 // speed of the jump
            let heightIncrement = ((-(i**2))) + JUMP_HEIGHT**2 + offset
            if(heightIncrement <= 50) clearInterval(jumpId)
            player.style.bottom = `${heightIncrement}px`
            console.log(heightIncrement)
            // console.log(`player style bottom ${player.style.bottom}`)
            // if(player.style.bottom.match(regex)[0] <= 50) clearInterval(jumpId)
        }, jumpInterval);
    }

}
