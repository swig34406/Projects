const nextBtn = document.querySelector(".next")
const backBtn = document.querySelector(".back")
const questionTag = document.querySelector(".question")
const optionTag1 = document.querySelector(".o1")
const optionTag2 = document.querySelector(".o2")
const optionTag3 = document.querySelector(".o3")
const optionTag4 = document.querySelector(".o4")
const optionAll = document.querySelectorAll("input");
const result = document.getElementById("result")



const quizQuestions = [
    {
        question: "Which method is used to convert JSON data into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        answer: "JSON.parse()"
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Google", "Netscape", "Apple"],
        answer: "Netscape"
    },
    {
        question: "What is the result of 3 + '3' in JavaScript?",
        options: ["6", "33", "Error", "undefined"],
        answer: "33"
    },
    {
        question: "Which HTML tag is used to include JavaScript?",
        options: ["js tag", "script tag", "javascript tag", "code tag"],
        answer: "script"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of these"],
        answer: "All of these"
    },
    {
        question: "What will typeof null return in JavaScript?",
        options: ["null", "object", "undefined", "number"],
        answer: "object"
    },
    {
        question: "Which array method adds an element at the end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which symbol is used for comments in JavaScript (single line)?",
        options: ["//", "/* */", "#", "!-- --"],
        answer: "//"
    },
    {
        question: "Which operator is used for strict equality?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    }
];

let currentIndex = 0;
let right = 0;
let wrong = 0;

function loadQuestion(index) {
    questionTag.innerHTML = `${index + 1} .${quizQuestions[index].question}`;

    optionTag1.innerHTML = quizQuestions[index].options[0];
    optionTag2.innerHTML = quizQuestions[index].options[1];
    optionTag3.innerHTML = quizQuestions[index].options[2];
    optionTag4.innerHTML = quizQuestions[index].options[3];


    optionAll[0].value = quizQuestions[index].options[0];
    optionAll[1].value = quizQuestions[index].options[1];
    optionAll[2].value = quizQuestions[index].options[2];
    optionAll[3].value = quizQuestions[index].options[3];

    optionAll.forEach(input => input.checked = false);
}

nextBtn.addEventListener("click", () => {
    let userAnswer = answer();

    if (!userAnswer) {
        alert("Please select an option!");
        return;
    }

    if (userAnswer === quizQuestions[currentIndex].answer) {
        right++;
    } else {
        wrong++;
    }

    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        loadQuestion(currentIndex);
        submitShow(currentIndex);
    } else {
        showResult();
    }
});

function back() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion(currentIndex)
    }
}
 backBtn.addEventListener("click",()=>{
    back()
     nextBtn.innerText = "Next"

 })

function submitShow(value) {
    if (value === quizQuestions.length - 1) {
        nextBtn.innerText = "Submit";
    } else {
        nextBtn.innerText = "Next";
    }
}

function answer(){
    let selected = null;
optionAll.forEach((input) => {
    if(input.checked){
selected = input.value;    }
})
return selected
}


function showResult() {
    document.body.innerHTML = `
    <div id = "result">
        <h1>Quiz Finished</h1>
        <p>Right Answers: ${right}</p>
        <p>Wrong Answers: ${wrong}</p>
        </div>
    `
    result.style.display = "flex";
    result.style.flexDirection = "column";
    result.style.justifyContent = "center"
    result.style.alignItems = "center";
    result.style.height = "100vh";
    result.style.textAlign = "center";
   

}


answer()

loadQuestion(currentIndex);



