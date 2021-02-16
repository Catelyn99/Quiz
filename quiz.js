
const showElement = (currentElementSelector, nextElementSelector) => {
    document.querySelector(currentElementSelector).style.display = 'none';
    document.querySelector(nextElementSelector).style.display = 'block';
}

document.querySelector('.button-start').addEventListener('click', function () {
    showElement('.startsite', '.placeforquestions');
});

(() => {
    const onAnswerClick = (event) => {
        let numberOfQuestion = Number(event.target.parentElement.parentElement.dataset.question);
        if (numberOfQuestion) {
            event.target.style.background = "rgb(32, 110, 110)";
            setTimeout(() => {
                showElement(`.question-${numberOfQuestion}`, `.question-${numberOfQuestion + 1}`);
            }, 650);
        }
    }
    
    let answers = document.querySelectorAll(`.answers:not([data-question="5"])`);
    for (let element of answers) {
        element.addEventListener('click', onAnswerClick);
    }
})();

const onClickLastQuestion = event => {
    const countPoint = () => {
        const inputs = document.querySelectorAll(`input`);
        let checkAnswer = 0;
        for (let element of inputs) {
            element.disabled = true;
            if (element.dataset.correctanswer === 'true' && element.checked) {
                checkAnswer += 1;
            }
        }
        document.querySelector(`#points`).innerHTML = checkAnswer;
    }

    const highlightCorrect = () => {
        const correctAnswers = document.querySelectorAll(`input[data-correctanswer="true"]`);
        for (let element of correctAnswers) {
            element.parentElement.style.background = "rgb(24, 180, 94)";
        }
    };

    const showAllQuestions = () => {
        event.target.style.background = "rgb(32, 110, 110)";
        for (let q = 1; q <= 5; q++) {
            document.querySelector(`.question-${q}`).style.display = "block";
        }
    };

    const removeEventListeners = () => {
        let answers = document.querySelectorAll(`.answers:not([data-question="5"])`);
        for (let element of answers) {
            element.removeEventListener('click', onAnswerClick);
        }
        document.querySelector(`.answers[data-question="5"]`).removeEventListener('click', onClickLastQuestion);
    }

    document.querySelector('.result').style.display = "block";
    countPoint();
    showAllQuestions();
    highlightCorrect();
    removeEventListeners();
}

document.querySelector('.answers[data-question="5"]').addEventListener('click', onClickLastQuestion);