var startQuizBut = document.querySelector("#start");
var timer = document.querySelector(".timer")
var question = document.querySelector(".question-title")
var choices = document.querySelector(".choices")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")
var initials = document.querySelector("#initials")

var secondsLeft = 60







let questions = [{
    questionOne: {question: "Who is your current president?",
    choices: ["Obama", "Biden", "Hilary", "My Mom"],
    answer: "Biden"},

questionTwo: {
    question:"How many fingers do you have in one hand?" ,
choices: ["one", "two", "three", "four", "five"] ,
answer: "five"
}}
]


function setTime(){

    var timeInterval = setInterval(() => {
secondsLeft--

timer.textContent = secondsLeft

if (secondsLeft === 0){
    clearInterval(timeInterval);
}
        
    }, 1000);
}

startQuizBut.addEventListener("click", setTime)