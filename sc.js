const questions= [
    {
        question: "Which is largest animal in the world",
        answers:[
            { text: "Shark" , correct: false},
            {text: "Blue whale" , correct: true },
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},

        ]
    },
    {
        question: "Which is largest desert in the world",
        answers:[
            {text: "Kalahari" , correct: false},
            {text: " Gobi" , correct: false},
            {text: "Sahara" , correct: false},
            {text: "Antartica" , correct: true},

        ]
    },
    {
        question: "Which is Smallest continent in the world",
        answers:[
            {text: "Asia" , correct: false},
            {text: "Australia" , correct: true},
            {text: "Arctic" , correct: false},
            {text: "Africa" , correct: false},

        ]
    },
    {
        question: "Which is smallest country in the world",
        answers:[
            {text: "Vatican City" , correct: true},
            {text: "Bhutan" , correct: false},
            {text: "Nepal" , correct: false},
            {text: "Shri Lanka" , correct: false},

        ]
    }
];

const questionElement = document.getElementById("question");
const ansbuttonElement = document.getElementById("answer-buttons");
const nextbtnElement = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    nextbtnElement.innerHTML = "Next" ;
    showQuestion();
    
}

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansbuttonElement.appendChild(button);
        if (answer.correct) {

            button.dataset.correct = answer.correct;
            
        }
        button.addEventListener("click",SelectAnswer);
    });
}



function resetState() {

    nextbtnElement.style.display = "none";
    while(ansbuttonElement.firstChild){
        ansbuttonElement.removeChild(ansbuttonElement.firstChild)
    }
    
}

function SelectAnswer(e) {

    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if (isCorrect){

        selectBtn.classList.add("correct");
        score++;
        
    } else {
        selectBtn.classList.add("incorrect");
        
    }

    Array.from(ansbuttonElement.children).forEach(button => {

        if (button.dataset.correct === "true") {
            

            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextbtnElement.style.display = "block"
    
}


function showScore() 

    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextbtnElement.innerHTML = "play Again";
    nextbtnElement.style.display ="block";
    
}
function handleNewButton() {

    currentQuestionIndex++;

   if (currentQuestionIndex < questions.length) {

    showQuestion();


    
   } else {

    showScore();
    
   }
}

nextbtnElement.addEventListener("click",() =>{

    if (currentQuestionIndex < questions.length) {

        handleNewButton();
        
    }else{
        StartQuiz();
    }
});

StartQuiz();