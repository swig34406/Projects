/* Best syntax 

function update() {
    // movement logic
}

function render() {
    c.clearRect(0, 0, canvas.width, canvas.height)

    // draw everything
    drawGreenBox()
    drawRedBox()
}

function animate() {
    requestAnimationFrame(animate)
    update()
    render()
} */



const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")


let direction = ""
let s = 2
let box = [
    {
    x: 80,
    y: 150,
    size: 35
    }
];

let circle = {
    x: Math.random() * (canvas.width - 24) + 12,
    y: Math.random() * (canvas.height - 24) + 12,
    r: 9
};

function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height)


    c.fillStyle = "green"
    c.fillRect(box[0].x, box[0].y,35, 35)

    c.beginPath()
    c.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false)
    c.fillStyle = "red"
    c.fill()

}

function animate() {
    requestAnimationFrame(animate);
    update()
    draw()
}
animate()


function update() {
    if (direction === "down") box[0].y += s;
    if (direction === "up") box[0].y -= s;
    if (direction === "left") box[0].x -= s;
    if (direction === "right") box[0].x += s;

    if (box[0].x > canvas.width) {
        box[0].x = -35
    }

    if (box[0].x + 35 < 0) {
        box[0].x = canvas.width
    }

    if (box[0].y > canvas.height) {
        box[0].y = -35 
    }

    if (box[0].y + 35 < 0) {
        box[0].y = canvas.height
    }




}

function collision() {

    return (
        box.x < circle.x + circle.r &&
        box.x + box.size > circle.x - circle.r &&
        box.y < circle.y + circle.r &&
        box.y + box.size > circle.y - circle.r
    )
}



document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        direction = "right"

    }
    if (e.key === "ArrowLeft") {
        direction = "left"
    }
    if (e.key === "ArrowUp") {
        direction = "up"
    }
    if (e.key === "ArrowDown") {
        direction = "down"
    }


})




