$(document).ready(function () {
    // DISABLE HIGHTLIGHT TEXT 
    document.onselectstart = new Function ("return false")
    // CUSTOM CURSOR
    const cursorPoint = document.getElementsByClassName('cursor__point');
    const cursorBorder = document.getElementsByClassName('cursor__border');
    window.addEventListener('mousemove', (e) => {
        setPosition(cursorPoint, e);
        setPosition(cursorBorder, e);
    });
    // CHANGE CURSOR
    $(".header__rightContent").hover(function() {
        $('.point__default').css("display", "none");
        $('.point__default').css("opacity", "0");
        $('.point__hand').css("display", "block");
        $('.point__hand').css("opacity", "1");
        $('.oval__textHand').css("opacity", "1");
    }, function() {
        $('.point__default').css("display", "block");
        $('.point__default').css("opacity", "1");
        $('.point__hand').css("display", "none");
        $('.point__hand').css("opacity", "0");
        $('.oval__textHand').css("opacity", "0");
    });
    $(".leftContent__sound").hover(function() {
        $('.point__default').css("display", "none");
        $('.point__default').css("opacity", "0");
        $('.point__music').css("display", "block");
        $('.point__music').css("opacity", "1");
        $('.oval__textMusic').css("opacity", "1");
    }, function() {
        $('.point__default').css("display", "block");
        $('.point__default').css("opacity", "1");
        $('.point__music').css("display", "none");
        $('.point__music').css("opacity", "0");
        $('.oval__textMusic').css("opacity", "0");
    });

    
});
// SET POSITION CURSOR
function setPosition(element, e) {
    element[0].style.top = `${e.pageY}px`
    element[0].style.left = `${e.pageX}px`
}

  