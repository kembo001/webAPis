// I have a bunch of quiz questions to ask. What is the best way to store all those questions, PLUS the correct answer for each one?
// For each question in the quiz:
   // The question itself
   // The possible answers 
   // Which answer is correct 
 
// Have a process where:
  // When the game starts, a countdown begins
  // A wquestion is selected from the collection
  // All the elements are added to the DOM 
  // The user will click on one of the answers 
  // Detect that click and determine if the user clicked on the right answer 
     // If yes, add some points 
     // If no, subtract 5 or 10 seconds from the time remaining
     // Go the next question
 
// After all questions OR after time runs out, show the user their score
// High score tracking
 

// selectors 
var header = document.getElementById('header')
var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('questions-container')
startButton.addEventListener('click', startGame)
// var questionButton = document.getElementById('btn')
// questionButton.addEventListener('click', nextQ )
questionContainer.style.visibility = 'hidden'
var questionElement = document.getElementById('question')
var shuffledQuestion, currentQuestion;
var choices = Array.from(document.querySelectorAll(".btn"))
var countdownEl = document.getElementById('countDown')

// global variables
var startingTime = 10;
var time = startingTime * 60
var score = 0
var questions =[
    {
        questions: 'What is 2+2',
        btn1: '4',
        btn1: '0',
        btn1: '7',
        btn1: '80',
        answer: 4,
    },
    {
        questions: 'What is 10*8',
        btn1: '2',
        btn1: '0',
        btn1: '7',
        btn1: '80',
        answer: 80,
    },
    {
        questions: 'What is 2+5',
        btn1: '2',
        btn1: '0',
        btn1: '7',
        btn1: '80',
        answer: 7,
    },
    {
        questions: 'What is 2-2',
        btn1: '2',
        btn1: '0',
        btn1: '7',
        btn1: '80',
        answer: 0,
    }
]

var score = 100
var maxQ = 4

// functions
function updateTime(){
    setInterval(updateTime, 1000);
    var minutes = Math.floor(time / 60, 10);
    var seconds = time % 60

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    // clearInterval(time)
    
}
function startGame(){
   header.style.visibility = 'hidden'
   startButton.style.visibility = 'hidden'
   questionContainer.style.visibility = 'visible'
   shuffledQuestion = questions.sort(() => Math.random() - .5)
   currentQuestion = 0
   score = 0
   updateTime()
   nextQ()
   selectA()
}
function nextQ(){
   showQuestion(shuffledQuestion[currentQuestion])
   if(questions.length === 0 || time === 0){
       localStorage.setItem('mostRecentScore', score)

      return window.location.assign('/end.html') 
   }
   choices.forEach(choice => {
       var number = choices.dataset['number']
       choices.innterText = currentQuestion['choice'+ number]
   })
   acceptingAnswers = true
}
choices.addEventListener('click', e=>{
    if(!acceptingAnswers) return

    acceptingAnswers = false
    // var selectedChoice = e.target
    // var selecetdAnswer = selectedChoice.dataset['number']
})
incrementScore = num =>{
    score +=num
}

function showQuestion(question){
   questionElement.innerText= question.question
}
function selectA(){
   nextQ()
}
 
// function displayQuestion(){
//     if (test.isEnded()){
//         showScores();
//     } else{
//         var questionElement = document.getElementById('question');
//         questionElement.innerHTML = test.getQuestionIndex().text;

//         var choices = test.getQuestionIndex().choices;
//         for(var i = 0; i < choices.lenght; i++){
//                 var choiceElement = document.getElementById('btn'+ i)
//                 choiceElement.innerHTML=choice[i]
//                 guess
//         }
// }
// }

// execute code
