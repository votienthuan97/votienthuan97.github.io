$(document).ready(function () {
    // DISABLE CURSOR HIGHTLIGHT, COPY TEXT
    document.onselectstart = new Function ("return false");
    // CUSTOM MOUSE MOVE
    const cursorPoint = document.querySelector('.cursor__point');
    let mouseX = 0;
    let mouseY = 0;
    let innerX = 0;
    let innerY = 0;
    let outerX = 0;
    let outerY = 0;
    let loop = null;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!loop) {
            loop = window.requestAnimationFrame(render);
        }
    });
    function render() {
        loop = null;
        innerX = lerp(innerX, mouseX, 0.17);
        innerY = lerp(innerY, mouseY, 0.17);
        outerX = lerp(outerX, mouseX, 0.15);
        outerY = lerp(outerY, mouseY, 0.15);
        const normalX = Math.min(Math.floor((Math.abs(mouseX - outerX) / outerX) * 1000) / 1000, 1);
        const normalY = Math.min(Math.floor((Math.abs(mouseY - outerY) / outerY) * 1000) / 1000, 1);
        const normal  = normalX + normalY * .5;
        cursorPoint.style.transform = `translate3d(${outerX}px, ${outerY}px, 0)`;
        if (normal !== 0) {
            loop = window.requestAnimationFrame(render);
        }
    }
    // CUSTOM CURSOR HOVER
    cursorHoverLink('.headerWeb__btnOpenMenu');
    cursorHoverLink('.content__itemLink');
    cursorHoverItem('.listProject__item');
});
function lerp(s, e, t) {
    return (1 - t) * s + t * e;
}
function cursorHoverLink (el) {
    $(el).hover(function() {
        $(".cursor").addClass("hoverLink");
    }, function() {
        $(".cursor").removeClass("hoverLink");
        }
    );
}
function cursorHoverItem (el) {
    $(el).hover(function() {
        $(".cursor").addClass("hoverItem");
        $(".point__textView").addClass("active");
    }, function() {
        $(".cursor").removeClass("hoverItem");
        $(".point__textView").removeClass("active");
        }
    );
}