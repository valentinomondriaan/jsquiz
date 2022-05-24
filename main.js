const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let quizDiv = document.querySelector('.quiz');

// submitButton.addEventListener('click', showResults);
function startQuiz(){
    for (let i = 1; i < 10; i++) {
    quizDiv += '<p>Deze div wordt toegevoegd!</p>';
    }
};
startButton.addEventListener('click', startQuiz);


const questions = [
    {
        question: "Waar ligt Turkije?",
        optionA: "Europa",
        optionB: "Afrika",
        optionC: "Azië en Europa",
        answer: "Azië en Europa"
    },
    {
        question: "Wie is de baas van Turkije?",
        optionA: "Erdogan",
        optionB: "De Paus",
        optionC: "Donald Trump",
        answer: "Erdogan"
    },
    {
        question: "Wie aanbidden Turken?",
        optionA: "Erdogan",
        optionB: "De god van hun eigen religie",
        optionC: "Attaturk",
        answer: "De god van hun religie"
    },
    {
        question: "Wat is de hoofdstad van Turkije",
        optionA: "Istanbul",
        optionB: "Rabat",
        optionC: "Ankara",
        answer: "Ankara"
    },
    {
        question: "Wat is de nationale sport van Turken?",
        optionA: "Olieworstelen",
        optionB: "Armpje drukken",
        optionC: "Voetbal",
        answer: "Olieworstelen"
    },
];

