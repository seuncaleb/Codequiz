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



function startQuiz (){var timeInterval = setInterval(() => {
    secondsLeft--
    
    timer.textContent = secondsLeft
    
    if (secondsLeft === 0){

        endScreen.style.display = "block";
        questionsContainer.setAttribute("style", "hide;");
        clearInterval(timeInterval);
    }

    if(qb.length <= currentQuiz ){

        timer.textContent ="Done"

    }
            
        }, 1000); 

        startScreen.setAttribute("class", "hide");
        questionsContainer.style.display = "block";
      

}

startQuizBut.addEventListener("click", startQuiz)

// create a variable to store and display right and wrong answers
var answerContainer = document.createElement("div");
 var answer = document.createElement("h3");

 answerContainer.setAttribute("style", "padding: 12px; margin-top: 20px")
questionsContainer.appendChild(answerContainer)
answerContainer.appendChild(answer)
    
for (var i=0; i < options.length; i++){
    options[i].setAttribute("style", "width: 50%; padding: 15px; text-align: left; ")}

// create two functions for right and wrong answers 
function rightAnswer () { 
answer.textContent = "Correct!"
score ++    
 answer.setAttribute("style", "color: Green; font-size: 12px;")
}

function wrongAnswer () {
answer.textContent = "Opps, that's a wrong answer!"
answer.setAttribute("style", "color: red; font-size: 12px;")
secondsLeft = secondsLeft - 2
} 


// create an array of objects to store questions, options and correct answers 
let  qb =
    [{question: "Commonly used data types DO Not Include",

    a: "1. strings", 
    b: "2. booleans",
    c: "3. alerts",
    d: "4. numbers",
correct: "3. alerts"},

{question: "The condition in an if / else statement is enclosed with",

        a: "1. quotes",
        b: "2. curly brackets",
        c: "3. parenthesis",
        d: "4. square brackets",
    correct: "3. parenthesis"},

{question: "Arrays in JavaScript can be used to store?",

    a: "1. number and strings", 
    b: "2. other arrays",
    c: "3. booleans",
    d: "4. all of the above",
correct: "4. all of the above" },

{question: "String values must be enclosed within __________ when being assigned to variables.",

    a: "1. commas", 
    b: "2. curly brackets",
    c: "3. quotes",
    d: "4. parenthesis",
correct: "3. quotes" },

{question: "A very useful tool used during development and debugging for printing content to the debugger is:",

    a: "1. JavaScript", 
    b: "2. terminal/bash",
    c: "3. for loops",
    d: "4. console.log",
correct: "4. console.log" },
]






let currentQuiz = 0
let score = 0

// option button design 



// create a function to start the quiz 
function quiz (){

   
    let currentQuizData = qb[currentQuiz];

eachQuestion.innerHTML =currentQuizData.question;


op1.textContent = currentQuizData.a;
op2.textContent = currentQuizData.b;
op3.textContent = currentQuizData.c;
op4.textContent = currentQuizData.d;





// Add event listeners to buttons




 op1.addEventListener("click", function(){
    console.log(op1);
    if ( currentQuizData.a === currentQuizData.correct){
 rightAnswer();
 
    }
     else{wrongAnswer();

        
        
        }   
        currentQuiz++;
        console.log(currentQuiz);
      
        if (qb.length <= currentQuiz){
            endScreen.style.display = "block" 
            questionsContainer.setAttribute("style", "hide;");
             
     }
     
     else {
         quiz();
     }
})


op2.addEventListener("click", function(){
    

    if ( currentQuizData.b === currentQuizData.correct){

    rightAnswer();
     
    }
    else{wrongAnswer()
        }  
          
          
             currentQuiz++
             if (qb.length <= currentQuiz){
        
                endScreen.style.display = "block"  
                questionsContainer.setAttribute("style", "hide;");
                   
         }
         
         else {
             quiz()
         }          
})


op3.addEventListener("click", function () {

        if (currentQuizData.c === currentQuizData.correct) {

            rightAnswer();
            
           
        }
        else {
            wrongAnswer();
            
        }
       
        
        currentQuiz++
        if (qb.length <= currentQuiz){
        
            endScreen.style.display = "block"   
            questionsContainer.setAttribute("style", "hide;"); 
     }
     
     else {
         quiz()
     }

    })

op4.addEventListener("click", function(){

    if (  currentQuizData.d === currentQuizData.correct){

        rightAnswer()
        
    }
    else{wrongAnswer(); }
   
    
    currentQuiz++
    if (qb.length <= currentQuiz){
        
        endScreen.style.display = "block"   
        questionsContainer.setAttribute("style", "hide;");
        
 }
 
 else {
     quiz()
 }
    
}) 

//console.log(score)
console.log(currentQuiz);
}


quiz()



// code for end page 
let initial = document.querySelector("#initials")
let messageArea = document.querySelector("#feedback")
let finalScores = document.querySelector("#final-score")


// create a function to take  user initial and display scores while storing in local storage 
function messageInArea(type, friend) {
    messageArea.textContent =  friend;
    messageArea.style.display ="block"
    messageArea.setAttribute("class", type)
    messageArea.setAttribute("style", "font-size:12px; color: green;")
  }
  
  let submit = document.querySelector("#submit")

  submit.addEventListener("click", function(event){
 
    event.preventDefault();

    let playerInfo = {

        player:  initial.value.trim(),
        score: score

    }

    if (playerInfo.player.length > 3)
    {
        messageInArea("error", "initials shouldn't exceed 3 characters")
    }

    else {

      location.pathname ="/starter/html/highscores.html"
      messageInArea("error", "initials shouldn't exceed 3 characters")
    }
 
  

    localStorage.setItem("playerInfo", JSON.stringify(playerInfo));

    console.log(localStorage);
  } 
  
  
  )

  var pname = window.location.pathname;

console.log(pname)
