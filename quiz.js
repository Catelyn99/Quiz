
const showElement = (currentElementSelector, nextElementSelector) => {
    document.querySelector(currentElementSelector).style.display = 'none';
    document.querySelector(nextElementSelector).style.display = 'block';
}

document.querySelector('.button-start').addEventListener('click', function(){
   showElement('.startsite', '.placeforquestion');
});
