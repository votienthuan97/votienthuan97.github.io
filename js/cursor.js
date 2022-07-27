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
    // SET TIME SHOW CURSOR HOME
    setTimeout(() => {
        changeStyleCSS('.cursor' , {opacity : 1});
        changeStyleCSS('.border__oval' , {border : '2px solid #EEE'});
        changeStyleCSS('.border__loading' , {visibility : 'visible'});
    }, 0);
     // SET TIME SHOW LOADING CURSOR HOME
    setInterval(() => {
        changeStyleCSS('.border__oval' , {border : '2px solid #F2DA87'});
        changeStyleCSS('.border__loading' , {visibility : 'hidden'});
    }, 8500);
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

  