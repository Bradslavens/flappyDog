
// * set up game div
// launch obsticles from the right
// spawn at random heights
// when space bar is clicked player jumps over obsticles


// controls
const JUMP_HEIGHT = 10
const RANGE = JUMP_HEIGHT


let player = document.getElementById("player")
window.addEventListener('keydown', jump)

function jump(e){
    if(e.code == 'Space'){
        let heightIncrement = 0
        for(let i = -JUMP_HEIGHT; i<=JUMP_HEIGHT; i++){
            console.log((-(i**2)) + RANGE**2)
            // player.style.marginTop = "-100px"
            // console.log(player.offsetTop)
            // heightIncrement = (-(i**2)) + RANGE**2
            heightIncrement+= 10
            player.style.marginTop = `-${heightIncrement}px`
            console.log(` margin top ${window.getComputedStyle(player, null).getPropertyValue("margin-top")}`)
        }
    }
}