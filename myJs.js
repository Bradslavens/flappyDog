
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
const targetSpawnRate = 3000
let canJump = false
const GROUND = document.getElementById("ground")

/// handle player jumping 
let player = document.getElementById("player")
window.addEventListener('keydown', handleKeydown)
let jumpId = 0
let regex = /\d+/
function handleKeydown(e){
    if(e.code === "Space"){
    if(canJump){
        console.log(`jump ${canJump}`)
        if(jumpId !== 0){ clearInterval(jumpId)}
            let offset = window.getComputedStyle(player, null).getPropertyValue("bottom").match(regex)
            offset = Number(offset)
            let i = -10
            jumpId = setInterval(() => {
                if(!canJump) clearInterval(jumpId)
                // console.log(`jumping i ${i} jh ${JUMP_HEIGHT} offset ${offset}`)
                i+= .25 // speed of the jump
                let heightIncrement = ((-(i**2))) + JUMP_HEIGHT**2 + offset
                // console.log(`height increment ${heightIncrement}`)
                if(heightIncrement <= 50) clearInterval(jumpId)
                player.style.bottom = `${heightIncrement}px`
                console.log(`player ot ${player.offsetTop} ground ot ${GROUND.offsetTop} h ot ${player.offsetHeight}`)
                if(player.offsetTop > (GROUND.offsetTop + player.offsetHeight) ) clearInterval(jumpId)
                // if(player.style.bottom.match(regex)[0] < 50) clearInterval(jumpId)
            }, fpsms);
        }
    
    }

}

// game manager
let spawnIntervalId = 0
let loopCounter = 0
let targetIncrement = .50
let arena = document.getElementById("arena")
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const targetSpeed = 1
let targetLoopCount = 0
let collisionIntervalId = 0

function start() {
    canJump = true
    spawnIntervalId= setInterval(spawnTarget, targetSpawnRate)
    startButton.setAttribute("disabled", "")
    stopButton.removeAttribute("disabled")

}

function stop() {
    console.log(`player offset top ${player.offsetTop}`)
    clearInterval(spawnIntervalId)
    canJump = false
    startButton.removeAttribute("disabled")
    stopButton.setAttribute("disabled", true)
}

function spawnTarget(){
    const target = document.createElement("div")
    target.setAttribute("class", "target")
    let height = Math.floor(Math.random() * 90)
    target.style.bottom = `${height}%`
    arena.insertAdjacentElement("afterbegin", target)
}

// handle collision
const collisionInterval = 16
collisionIntervalId = setInterval(checkCollision, collisionInterval)

function checkCollision(){
    let targets = document.querySelectorAll(".target")
    for(let i = 0; i<targets.length; i++){
        if(player.offsetTop > (targets[i].offsetTop - 50) && player.offsetLeft > targets[i].offsetLeft && player.offsetLeft < (targets[i].offsetLeft + 50) ){
            player.remove()
            targets[i].remove()
        }
    }
}


