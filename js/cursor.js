$(document).ready(function () {
    // DISABLE HIGHTLIGHT TEXT 
    document.onselectstart = new Function ("return false");
    // CUSTOM CURSOR
    const cursorPoint = document.getElementsByClassName('cursor__point');
    const cursorBorder = document.getElementsByClassName('cursor__border');
    window.addEventListener('mousemove', (e) => {
        setPosition(cursorPoint, e);
        setPosition(cursorBorder, e);
    });
});
// SET POSITION CURSOR
function setPosition(element, e) {
    element[0].style.top = `${e.pageY}px`;
    element[0].style.left = `${e.pageX}px`;
}

  