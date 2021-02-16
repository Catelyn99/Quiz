
const showElement = (currentElementSelector, nextElementSelector) => {
    document.querySelector(currentElementSelector).style.display = 'none';
    document.querySelector(nextElementSelector).style.display = 'block';
}

document.querySelector('.button-start').addEventListener('click', function () {
    showElement('.startsite', '.placeforquestions');
});

for (let q = 1; q < 5; q++) {
    document.querySelector(`.question-${q} > .answers`).addEventListener('click', function (event) {
        event.target.style.background = "rgb(32, 110, 110)";
        setTimeout(() => {
            showElement(`.question-${q}`, `.question-${q + 1}`);
        }, 650);
    });
}

document.querySelector('.question-5 > .answers').addEventListener('click', function (event) {
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

    event.target.style.background = "rgb(32, 110, 110)";
    for (let q = 1; q <= 5; q++) {
        document.querySelector(`.question-${q}`).style.display = "block";
    }

    document.querySelector('.result').style.display = "block";
    countPoint();
});







