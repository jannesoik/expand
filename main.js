var leftBox = document.getElementsByClassName('left')[0];
var rightBox = document.getElementsByClassName('right')[0];

function hideArrow(){
    leftBox.classList.add("hide");
}

function expandLeft() {
    rightBox.style.width='90%';
    leftBox.style.width='10%';
    rightBox.classList.add("hide");
    leftBox.classList.remove("hide");
}

function expandRight() {
    leftBox.style.width='90%';
    rightBox.style.width='10%';
    document.getElementsByClassName('right')[0].style.backgroundImage= "img/vihr-nuol.png";
    leftBox.classList.add("hide");
    rightBox.classList.remove("hide");
}
