$(document).ready(function () {
    // PERCENT LOADING PAGE
    hiddenLinkPage();
    showElm('.backgroundLoad');
        showElm('.backgroundLoad__loadWeb');
        setTimeout(function() {
            hiddenElm('.backgroundLoad');
            hiddenElm('.backgroundLoad__loadWeb');
    }, 5000);
    $('.content__text[data-percent]').each(function () {
        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percent'));
        $({countNum: 1}).animate({countNum: percentage}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                var pct = Math.floor(this.countNum) + ' %';
                progress.text(pct) && progress.siblings().children().css('width',pct);
            }
        });
    });
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
    // ONLY SHOW PAGE HOME
    showPage('#homePage');
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
function upIndex (elm) {
    $(elm).css({ 'z-index' : 1 });
}
function downIndex (elm) {
    $(elm).css({ 'z-index' : 0 });
}
function hiddenPage (elm) {
    $(elm).prop('checked', false);
}
function resizePage() {
    var w = window.innerWidth;
    var h = window.innerHeight;
}
function showLinkPage() {
    $('.headerWeb').css({ transform : 'translate(0px, 0px)', visibility : 'visible', opacity : 1, transition : '0.6s ease-in-out'});
    $('.footerWeb').css({ transform : 'translate(0px, 0px)', visibility : 'visible', opacity : 1, transition : '0.6s ease-in-out'});
}
function hiddenLinkPage() {
    $('.headerWeb').css({ transform : 'translate(0px, -20px)', visibility : 'hidden', opacity : 0, transition : '0.6s ease-in-out'});
    $('.footerWeb').css({ transform : 'translate(0px, 20px)', visibility : 'hidden', opacity : 0, transition : '0.6s ease-in-out'});
}