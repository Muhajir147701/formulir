// add even listener scrool window

//scroll value
function scrollValue() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

window.addEventListener('scroll', function() {
    console.log(scrollValue());
    moveElement(document.querySelector('.bounce'), 0, 0, 10);
});

// move element from right to left and back
function moveElement(element, final_x, final_y, interval) {
    console.log('moveElement');
}