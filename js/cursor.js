$(document).ready(function () {
    // SCALE BORDER CURSOR WHEN LONG PRESS
    document.onmousedown = function(){
        mouseDown();
    };
    // SCALE BORDER CURSOR WHEN DEFAULT
    document.onmouseup = function(){
        mouseUp();
    };
    // DISABLE CURSOR HIGHTLIGHT, COPY TEXT
    document.onselectstart = new Function ("return false");
    // ONLY HIDDEN CURSOR
    document.documentElement.style.cursor = 'none';
    // CUSTOM CURSOR POSITION
    const cursorPoint = document.getElementsByClassName('cursor__point');
    const cursorBorder = document.getElementsByClassName('cursor__border');
    window.addEventListener('mousemove', (position) => {
        setPosition(cursorPoint, position);
        setPosition(cursorBorder, position);
    });
});
// SET POSITION CURSOR
function setPosition(cursor, position) {
    cursor[0].style.top = `${position.pageY}px`;
    cursor[0].style.left = `${position.pageX}px`;
}
// SET SCALE BORDER CLICK
function mouseDown() {
    changeStyleCSS('.cursor__border' , {transform : 'scale(1.25, 1.25)'});
}
function mouseUp() {
    changeStyleCSS('.cursor__border' , {transform : 'scale(1.0, 1.0)'});
}

  