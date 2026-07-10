const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")


let y = 300;
let dy = 3.4;
let r = 28;
let gravity = 0.5;
let friction = 0.8;

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    c.beginPath()
    c.strokeStyle = "black"
    c.moveTo(0, 500)
    c.lineTo(700, 500)
    c.stroke()

    c.beginPath()
    c.arc(100, y, r, 0, Math.PI * 2, false)
    c.fillStyle = "black"
    c.fill()

    y += dy

    if (y + r > 500 || y - r < 250) {
        dy = -dy  
    }



}

animate()

