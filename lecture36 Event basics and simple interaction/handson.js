const questions=[
    {
    tittle: "What is JavaScript primarily used for?",
    options: [
        "Styling web pages",
        "Creating dynamic web content",
        "Storing data in databases",
        "Designing layouts"
    ],
    correctOtion: 1,
},

{
    tittle: "Which tag is used to link a JavaScript file?",
    options: [
        "<js>",
        "<script>",
        "<javascript>",
        "<link>"
    ],
    correctOtion: 1,
},

{
    tittle: "Which keyword declares a variable in JavaScript?",
    options: [
        "var",
        "make",
        "int",
        "declare"
    ],
    correctOtion: 0,
},

{
    tittle: "Which method prints output to the console?",
    options: [
        "log.console()",
        "console.write()",
        "console.log()",
        "print()"
    ],
    correctOtion: 2,
},

{
    tittle: "Arrays in JavaScript are written with?",
    options: [
        "{}",
        "[]",
        "()",
        "<>"
    ],
    correctOtion: 1,
},

];

// Selection Options

const option1=document.querySelector(".option-1")
const option2=document.querySelector(".option-2")
const option3=document.querySelector(".option-3")
const option4=document.querySelector(".option-4")

// Selecting Questions
 const questionSection=document.querySelector(".questions")
 const questionTitle=document.querySelector(".question-title")

 // Selection Score

const scoreSection=document.querySelector(".score")

// Select Next Button

const nextbtn=document.querySelector(".next")

 

option1.addEventListener("click",()=>{
    changeScore(1);
    changeQuestion();
});
option2.addEventListener("click",()=>{
    changeScore(2);
    changeQuestion();
});
option3.addEventListener("click",()=>{
    changeScore(3);
    changeQuestion();
});
option4.addEventListener("click",()=>{
    changeScore(4);
    changeQuestion();
});
nextbtn.addEventListener("click",changeQuestion)

// Creating varaiables

 let score=0;
 let currentQuestionIndex=0;
 let correctAns=10;
 let wrongAns=-5;

function changeScore(correctAns){
    if(correctAns===questions[currentQuestionIndex].correctOtion){
        score+=correctAns;
    }
    else{
        score+=wrongAns;
    }
}


function changeQuestion(){
    if(currentQuestionIndex===questions.length-1){
        scoreSection.style.display="block";
        questionSection.style.display="none";
        scoreSection.textContent="Your Score="+score;

    }
    currentQuestionIndex++;

    const questionObj=questions[currentQuestionIndex]
    questionTitle.textContent=questionObj.tittle;

    option1.textContent=questionObj.options[0];
    option2.textContent=questionObj.options[1];
    option3.textContent=questionObj.options[2];
    option4.textContent=questionObj.options[3];


}