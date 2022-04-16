
// * set up game div
// launch obsticles from the right
// spawn at random heights
// when space bar is clicked player jumps over obsticles


// controls
const JUMP_HEIGHT = 10
const JUMP_SPEED = 1000
const JUMP_FACTOR = 20
const FPS = 60
let fpsms = 1000/FPS

/// handle player jumping 
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
        }, fpsms);
    }

}

// game manager
let gmIntervalId = 0
let loopCounter = 0
let targetIncrement = .50
let arena = document.getElementById("arena")
const targetSpeed = 1
let targetLoopCount = 0

function start() {
    gmIntervalId= setInterval(gameManager, fpsms)
}

function stop() {
    console.log("stop")
    clearInterval(gmIntervalId)
}

function gameManager(){
    if(loopCounter%100 == 0) spawnTarget()
    moveTarget()
    loopCounter++

}

function moveTarget(){
    let targets = document.querySelectorAll(".target")
    for(let i = 0; i<targets.length; i++){
        let posLeft = targets[i].offsetLeft
        console.log(typeof(posLeft))
        console.log(`pos left : ${posLeft} target speed: ${targetSpeed}`)
        let posL = posLeft - targetSpeed
        targets[i].style.left = `${posL}px`
    }
}

function spawnTarget(){
    const target = document.createElement("div")
    console.log(typeof(target))
    target.setAttribute("class", "target")
    let height = Math.floor(Math.random() * 90)
    target.style.bottom = `${height}%`
    arena.insertAdjacentElement("afterbegin", target)
}


