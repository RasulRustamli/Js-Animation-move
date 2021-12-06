function init() {
    objBox = document.getElementById("box");
    objBox.style.left = "0px";
    objBox.style.top = "0px";
}
function moveLeft() {
    objBox.style.left = parseInt(objBox.style.left) - 5 + "px";
}
function moveUp() {
    objBox.style.top = parseInt(objBox.style.top) - 5 + "px";
}
function moveRight() {
    objBox.style.left = parseInt(objBox.style.left) + 5 + "px";
}
function moveDown() {
    objBox.style.top = parseInt(objBox.style.top) + 5 + "px";
}
function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: 
            moveLeft();
            break;
        case 38: 
            moveUp();
            break;
        case 39: 
            moveRight();
            break;
        case 40: 
            moveDown();
            break;
    }
}

window.onload = init;