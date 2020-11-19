$(document).ready(function () {
    // PLAY PAUSE MUSIC BACKGROUND
    const btnPlayPause = document.getElementById("bgMusic");
    $("#soundPlayPause").click(function(){
        if($(this).prop("checked") == true) {
            changeStyleCSS('.soundBar__item' , {background : '#FF5500'});
            addStyleCSS('.soundBar__item', 'playSoundBar');
            btnPlayPause.play();
        }
        else if($(this).prop("checked") == false){
            changeStyleCSS('.soundBar__item' , {background : '#CCC'});
            removeStyleCSS('.soundBar__item', 'playSoundBar');
            btnPlayPause.pause();
        }
    });
    const videoHomeLoop = document.getElementById("vdHomeLoop");
    // INTRO > HOME
    setInterval(() => {
        changeStyleCSS('.video__homeLoop' , {visibility : 'visible', opacity : 1, 'z-index' : 1});
        changeStyleCSS('.video__intro' , {visibility : 'hidden', opacity : 0, 'z-index' : 0});
        changeStyleCSS('.home' , {visibility : 'visible', opacity : 1});
        changeStyleCSS('.headerWeb' , {visibility : 'visible', opacity : 1});
        videoHomeLoop.play();
    }, 4300);
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