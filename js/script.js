$(document).ready(function () {
    // RANDOM BORDER RADIUS AVATAR
    setInterval(() => {
        setRadius('.boxAvatar__img');
    }, 1500);
});
function setRadius(elm) {
    var blockContent = document.querySelector(elm);
    var br1 = randomBorderRadius();
    var br2 = randomBorderRadius();
    var br3 = randomBorderRadius();
    var br4 = randomBorderRadius();
    var br5 = randomBorderRadius();
    var br6 = randomBorderRadius();
    var br7 = randomBorderRadius();
    var br8 = randomBorderRadius();
    var brRD = `${ br1 }% ${ br2 }% ${ br3 }% ${ br4 }% / ${br5}% ${br6}% ${br7}% ${br8}%` ;
    blockContent.style['border-radius'] = brRD;
}
function randomBorderRadius(min = 30, max = 100) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}