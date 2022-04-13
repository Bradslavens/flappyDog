
// * set up game div
// launch obsticles from the right
// spawn at random heights
// when space bar is clicked player jumps over obsticles


// controls
const JUMP_HEIGHT = 10
const RANGE = JUMP_HEIGHT
const JUMP_SPEED = 1000
let jumper = 0


let player = document.getElementById("player")
window.addEventListener('keydown', jump)

function jump(e){
    if(e.code = "Space"){
        for(let i=-10, j=0; i<=10, j<=20; i++, j++){
            sto(i,j)
        }

        function sto(i,j){
            setTimeout(jumper, 50 * j, i)
        }
        let offset = 50
        function jumper(i){
            // heightIncrement = (-(i**2)) + RANGE**2
            let heightIncrement = ((-(i**2)) + RANGE**2) + offset
            console.log(heightIncrement)
            player.style.bottom = `${heightIncrement}px`
        }
    }
//     if(e.code == 'Space'){
//         for(let i = 0; i< 10; i++){
//             (function(i){
//                 jumper = setInterval(() => {
//                     console.log(`hello ${i}`)
//                 }, 1000);
//             })(i)
//         }
//         clearInterval(jumper)
        // let heightIncrement = 0
        // let i = -JUMP_HEIGHT
        // i<=JUMP_HEIGHT
        // i++
        // jumper = setInterval(jumpArc, JUMP_SPEED);
    // }
}

// let heightIncrement = 0
// let i = -JUMP_HEIGHT
// function jumpArc(){
//     heightIncrement = (-(i**2)) + RANGE**2
//     player.style.bottom = `${heightIncrement}px`
//     i++
//     if(i<=JUMP_HEIGHT) clearInterval(jumper)
// }