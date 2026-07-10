const button = document.querySelector(".btn")
const inp = document.querySelector(".input")

function randomQuotes(){
    let quotes = [
        "Be yourself",
        "Never give up",
        "Stay positive",
        "Work hard",
        "Dream big",
        "Keep learning",
        "Stay focused",
        "Be kind",
        "Believe in yourself",
        "Enjoy life"
    ];

    const random = Math.floor(Math.random()*10);
    return quotes[random]
}

button.addEventListener("click",()=>{
    inp.value = randomQuotes();
})
