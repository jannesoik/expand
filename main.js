var leftBox = document.getElementsByClassName('left')[0];
var rightBox = document.getElementsByClassName('right')[0];

function expandLeft() {
    rightBox.style.width='90%';
    leftBox.style.width='10%';
}

function expandRight() {
    leftBox.style.width='90%';
    rightBox.style.width='10%';
}