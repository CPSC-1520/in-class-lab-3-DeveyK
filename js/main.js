// Enter your code below.

console.log("is this working?");

document.addEventListener('DOMContentLoaded', function() {
const showbutton = document.querySelector('#show-resources');
const resourcesdiv = document.querySelector('.javascript-resources');

showbutton.addEventListener('click', function () {
    resourcesdiv.classList.remove('d-none');
});

resourcesdiv.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'A') {
        event.target.classList.add('fw-bold');
    }
});

resourcesdiv.addEventListener('mouseout', function (event) {
    if (event.target.tagName === 'A') {
        event.target.classList.remove('fw-bold');
    }
});

resourcesdiv.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        event.target.classList.add('fst-italic');
    }
});

});