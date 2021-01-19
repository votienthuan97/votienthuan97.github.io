$(document).ready(function () {
    // RESIZE PAGE
    window.addEventListener('resize', resizePage);
    $(window).resize(function() {
        showElm('.backgroundLoad');
        showElm('.backgroundLoad__resize');
        setTimeout(function() {
            hiddenElm('.backgroundLoad');
            hiddenElm('.backgroundLoad__resize');
        }, 1500);
    });
    // PLAY PAUSE MUSIC BACKGROUND
    const btnPlayPause = document.getElementById("sound__music");
    $('.sound__playPause').click(function() {
        if($(this).prop("checked") == true) {
            changeStyleCSS('.sound__soundBar' , {stroke : '#FF5500'});
            btnPlayPause.play();
        }
        else if($(this).prop("checked") == false) {
            changeStyleCSS('.sound__soundBar' , {stroke : '#CCC'});
            btnPlayPause.pause();
        }
    });
    // ONLY PAGE SHOW IN WEB
     $('.checkPage').click(function(){
        $('.checkPage').not(this).each(function(index, elm){
            elm.checked = false;
        });
    });
})
function changeStyleCSS (elm , styles) {
    $(elm).css(styles);
}
function addStyleCSS (elm , classAdd) {
    $(elm).addClass(classAdd);
}
function removeStyleCSS (elm , classRemove) {
    $(elm).removeClass(classRemove);
}
function showElm (elm) {
    $(elm).css({ visibility : 'visible', opacity : 1 });
}
function hiddenElm (elm) {
    $(elm).css({ visibility : 'hidden', opacity : 0 });
}
function showPage (elm) {
    $(elm).prop('checked', true);
}
function hiddenPage (elm) {
    $(elm).prop('checked', false);
}
function resizePage() {
    var w = window.innerWidth;
    var h = window.innerHeight;
}