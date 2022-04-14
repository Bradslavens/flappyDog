
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


let player = document.getElementById("player")
window.addEventListener('keydown', jump)

function jump(e){
    if(e.code === "Space"){
        for(let i=-JUMP_HEIGHT, j=0; i<=JUMP_HEIGHT, j<=JUMP_FACTOR; i++, j++){
            sto(i,j)
        }

        function sto(i,j){
            setTimeout(jumper, JUMP_DELAY * j, i)
        }
        let offset = 50
        function jumper(i){
            // heightIncrement = (-(i**2)) + RANGE**2
            let heightIncrement = ((-(i**2)) + RANGE**2) + offset
            console.log(heightIncrement)
            player.style.bottom = `${heightIncrement}px`
        }
    }
}
