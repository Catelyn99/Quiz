window.addEventListener('DOMContentLoaded', (event) => {

    const showElement = (currentElementSelector, nextElementSelector) => {
        document.querySelector(currentElementSelector).style.display = 'none';
        document.querySelector(nextElementSelector).style.display = 'block';
    }

    document.querySelector('.button-start').addEventListener('click', function () {
        showElement('.startsite', '.placeforquestions');
        this.style.display = "none";
    });

    const onAnswerClick = (event) => {
        const parent = event.target.parentElement;
        const numberOfQuestion = Number(parent.parentElement.dataset.question);
        if (numberOfQuestion) {
            parent.style.background = "rgb(32, 110, 110)";
            setTimeout(() => {
                showElement(`.question-${numberOfQuestion}`, `.question-${numberOfQuestion + 1}`);
            }, 650);
        }
    }

    (() => {
        const answers = document.querySelectorAll(`.answers:not([data-question="5"])`);
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
            const answers = document.querySelectorAll(`.answers:not([data-question="5"])`);
            for (let element of answers) {
                element.removeEventListener('click', onAnswerClick);
            }
            document.querySelector(`.answers[data-question="5"]`).removeEventListener('click', onClickLastQuestion);
        }

       setTimeout(() => {
        document.querySelector('.result').style.display = "block";
        countPoint();
        showAllQuestions();
        highlightCorrect();
        removeEventListeners();
        document.querySelector(`.restart-quiz`).style.display = "block";
       }, 0);
    }

    document.querySelector('.answers[data-question="5"]').addEventListener('click', onClickLastQuestion);
    document.querySelector(`.restart-quiz`).addEventListener('click', function () {
        location.reload(true);
    });
});