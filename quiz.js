
const showElement = (currentElementSelector, nextElementSelector) => {
    document.querySelector(currentElementSelector).style.display = 'none';
    document.querySelector(nextElementSelector).style.display = 'block';
}

document.querySelector('.button-start').addEventListener('click', function () {
    showElement('.startsite', '.placeforquestions');
});

for (let q = 1; q < 5; q++) {
    document.querySelector(`.question-${q} > .answers`).addEventListener('click', function () {
        setTimeout(()=>{ 
            showElement(`.question-${q}`, `.question-${q+1}`);
        },650);
    });
}

