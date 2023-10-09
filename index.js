const deckOfCards = [];

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', addCard);
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetStorage)

function addCard() {
    const questionInput = document.getElementsByClassName('input-box')[0];
    const answerInput = document.getElementsByClassName('input-box')[1];

    const questionValue = questionInput.value;
    const answerValue = answerInput.value;

    if (deckOfCards.length < 10) {
        deckOfCards.push({ question: questionValue, answer: answerValue });
        console.log(deckOfCards);

        questionInput.value = '';
        answerInput.value = '';
    } else {
        alert('Card limit reached. You cannot add more than 10 cards.');
    }
    try {
        localStorage.setItem('deckOfCards', JSON.stringify(deckOfCards));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function resetStorage() {
    localStorage.removeItem('deckOfCards');
}



