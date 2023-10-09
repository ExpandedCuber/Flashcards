const deckOfCardsStorage = JSON.parse(localStorage.getItem('deckOfCards')) || [];

const questionbox = document.getElementsByClassName('question-box');
const answerbox = document.getElementsByClassName('answer-box'); // Assuming you have an answer box

let currentCardIndex = -1; // Initialize with -1 to show the first card on "Next" click
let randomQuestion = '';
let randomAnswer = '';

function populateCards() {
    if (!deckOfCardsStorage || deckOfCardsStorage.length === 0) {
        console.log("No cards to display.");
        return;
    }

    // Increment the index to get the next card
    currentCardIndex = (currentCardIndex + 1) % deckOfCardsStorage.length;

    randomQuestion = deckOfCardsStorage[currentCardIndex].question;
    randomAnswer = deckOfCardsStorage[currentCardIndex].answer;

    questionbox[0].value = randomQuestion;
}

function nextCard() {
    populateCards();
}

const flipButton = document.getElementById('flip');
flipButton.addEventListener('click', flipCards);

function flipCards() {
    if (questionbox[0].value === randomQuestion) {
        questionbox[0].value = randomAnswer;
    } else {
        questionbox[0].value = randomQuestion;
    }
}

console.log(deckOfCardsStorage);

window.onload = populateCards;
