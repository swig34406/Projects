const btn = document.querySelector(".button")

function getRandomColor() {
    let hex = "#";
    const chars = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }

    return hex;
}
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor()
})