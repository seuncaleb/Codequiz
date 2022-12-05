let startQuizBut = document.querySelector("#start");
let timer = document.querySelector(".timer")
let eachQuestion = document.querySelector("#question-title")
let choices = document.querySelectorAll(".choices")
let endScreen = document.querySelector("#end-screen")
let finalScore = document.querySelector("#final-score")
let initials = document.querySelector("#initials")
let options = document.querySelectorAll(".option")
let startScreen = document.querySelector("#start-screen")
let questionsContainer = document.querySelector("#questions")
let op1 = document.querySelector('#op1');
let op2 = document.querySelector('#op2');
let op3 = document.querySelector('#op3');
let op4 = document.querySelector('#op4');


var secondsLeft = 20

// add an event to the start button to allow it start the quiz once it is clicked and reveal the questions 
startQuizBut.addEventListener("click", (startQuiz)
    
 
)


function startQuiz (){var timeInterval = setInterval(() => {
    secondsLeft--
    
    timer.textContent = secondsLeft
    
    if (secondsLeft === 0){

        questionsContainer.textContent =" Game Over";
        clearInterval(timeInterval);
    }
            
        }, 1000); 

        startScreen.setAttribute("class", "hide");
        questionsContainer.style.display = "block";
      

}

// create a variable to store and display right and wrong answers
var answerContainer = document.createElement("div");
 var answer = document.createElement("h3");
questionsContainer.appendChild(answerContainer)
answerContainer.appendChild(answer)
    

// create two functions for right and wrong answers 
function rightAnswer () { 
answer.textContent = "Correct!"
 answer.setAttribute("style", "color: Green; font-size: 12px;")
}

function wrongAnswer () {
answer.textContent = "Opps, that's a wrong answer!"
answer.setAttribute("style", "color: red; font-size: 12px;")
} 


// create an array of objects to store questions, options and correct answers 
let  qb =
    [ {question: "Who is your President?",

    a: "Obama", 
    b: "Biden",
    c: "Opera",
    d: "Your Mum",
correct: "Biden" },

{question: "What did I have for dinner?",
        a: "Bread",
        b: "rice",
        c: "Fish",
        d: "Nothing",
    correct: "Fish"}]





let currentQuiz = 0
let score = 0




quiz()
// create a function to start the quiz 
function quiz (){

    let currentQuizData = qb[currentQuiz]

eachQuestion.textContent = currentQuizData.question


op1.textContent = currentQuizData.a;
op2.textContent = currentQuizData.b;
op3.textContent = currentQuizData.c;
op4.textContent = currentQuizData.d;



// Add event listeners to buttons




 op1.addEventListener("click", function(){

    if ( currentQuizData.a === currentQuizData.correct){
 rightAnswer()
 score++
    }
     else{wrongAnswer()
        }   
        currentQuiz ++
        quiz()     
})


op2.addEventListener("click", function(){
    

    if ( currentQuizData.b === currentQuizData.correct){

    rightAnswer();
    score++; 
    }
    else{wrongAnswer()
           }  
           
           
           currentQuiz ++
           quiz()               
})


op3.addEventListener("click", function () {

        if (currentQuizData.c === currentQuizData.correct) {

            rightAnswer();
            score++
        }
        else {
            wrongAnswer();
        }
        currentQuiz ++
        quiz() 

    })

op4.addEventListener("click", function(){

    if (  currentQuizData.d === currentQuizData.correct){

        rightAnswer()
        score ++
    }
    else{wrongAnswer()}
    currentQuiz ++
    quiz() 
    
}) 

console.log(currentQuiz)
}

















function endTime(){

    startScreen.setAttribute("class", "hide");
    questionsContainer.setAttribute ("class", "hide")
    endScreen.style.display = "block";
}
