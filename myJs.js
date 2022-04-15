
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
let jumpInterval = 1000


let player = document.getElementById("player")
window.addEventListener('keydown', handleKeydown)
let jumpId = 0
let offset = window.getComputedStyle(player, null).getPropertyValue("bottom")
function handleKeydown(e){
    if(e.code === "Space"){
        let i = -10
        if(jumpId !== 0){ clearInterval(jumpId)}
        jumpId = setInterval(() => {
            let heightIncrement = ((-(i**2))) + RANGE**2 +50
            console.log(`height inc ${heightIncrement}`)
            player.style.bottom = `${heightIncrement}px`
            i++
        }, jumpInterval);
    }
    // if(e.code === "Space"){
    //     let i=-JUMP_HEIGHT
    //     let j= 0
    //     while(i<=JUMP_HEIGHT && j<=JUMP_FACTOR){
    //         sto(i,j)
    //         i++
    //         j++
    //     }

    //     function sto(i,j){
    //         setTimeout(jumper, JUMP_DELAY * j, i)
    //     }
    //     let offset = 50
    //     function jumper(i){
    //         // heightIncrement = (-(i**2)) + RANGE**2
    //         let heightIncrement = ((-(i**2)) + RANGE**2) + offset
    //         console.log(heightIncrement)
    //         player.style.bottom = `${heightIncrement}px`
    //     }
    // }
}
