const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")

const currentTime = new Date()

setInterval(() => {
    const currentTime = new Date()
    
    hour.innerHTML = format(currentTime.getHours()) + ":"
    min.innerHTML = format(currentTime.getMinutes()) + ":"
    sec.innerHTML = format(currentTime.getSeconds())
}, 1000);

function format(t) {
    return t < 10 ? "0" + t : t
}
