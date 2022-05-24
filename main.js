const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', showResults);

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
        answers: {
            a: "Erdogan",
            b: "De Paus",
            c: "Donald Trump"
          },
          correctAnswer: "a"
    },
    {
        question: "Wie aanbidden Turken?",
        answers: {
            a: "Erdogan",
            b: "De god van hun eigen religie",
            c: "Attaturk"
          },
          correctAnswer: "b"
    },
    {
        question: "Wat is de hoofdstad van Turkije",
        answers: {
            a: "Istanbul",
            b: "Rabat",
            c: "Ankara"
          },
          correctAnswer: "c"
    },
    {
        question: "Wat is de nationale sport van Turken?",
        answers: {
            a: "Olieworstelen",
            b: "Armpje drukken",
            c: "Voetbal"
          },
          correctAnswer: "a"
    },
];