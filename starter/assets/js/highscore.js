let iniScores = document.createElement("li")
let highscore = document.querySelector("#highscores")
let goBack = document.querySelector("#back")
let clear = document.querySelector("#clear")


iniScores.setAttribute("style", "background-color: grey; height: 25px;")

highscore.appendChild(iniScores);

let scoreDisplay = JSON.parse(localStorage.getItem("playerInfo"));

console.log(scoreDisplay);

localStorage.getItem('playerInfo')

console.log(localStorage)

iniScores.textContent = scoreDisplay.player + ": " + scoreDisplay.score;




goBack.addEventListener("click", function(){

    //event.preventDefault

    window.location.pathname="/index.html"
})


clear.addEventListener("click", function (){

    localStorage.clear();
    iniScores.textContent = "";

})

var pname = window.location.pathname;

console.log(pname)