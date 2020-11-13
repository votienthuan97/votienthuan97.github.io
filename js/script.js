// eslint-disable-next-line no-undef
$(document).ready(function () {
    const videoHomeLoop = document.getElementById("vdHomeLoop");
    const videoHomeToContact = document.getElementById("vdHomeToContact");
    const videoContactLoop = document.getElementById("vdContactLoop");
    const videoContactToHome = document.getElementById("vdContactToHome");
    // eslint-disable-next-line no-undef
    $(".contact__text").click(function() {
        changeStyleCSS(".video__homeLoop" , {visibility : 'hidden', opacity : 0, 'z-index' : 0});
        changeStyleCSS(".video__homeToContact" , { visibility : 'visible', opacity : 1, 'z-index' : 1 });
        changeStyleCSS(".rContent__contact" , { 'pointer-events' : 'none' });
        changeStyleCSS(".lContent__story" , { 'pointer-events' : 'none' });
        changeStyleCSS(".rContent__project" , { 'pointer-events' : 'none' });
        videoHomeToContact.play();
        setTimeout(function() {
            changeStyleCSS(".video__homeToContact" , { transform: 'translate(-70%, 0%)', transition : '0.8s' });
            videoContactLoop.load();
        }, 1200);
        setTimeout(function() {
            changeStyleCSS(".video__homeToContact" , {visibility : 'hidden', opacity : 0, 'z-index' : 0, transform: 'translate(0%, 0%) scale(0.95)', transition : '0s' });
            changeStyleCSS(".video__contactLoop" , {visibility : 'visible', opacity : 1, 'z-index' : 1 });
            videoHomeToContact.load();
            videoContactLoop.play();
            videoContactToHome.load();
            changeStyleCSS(".lContent__logo" , { 'pointer-events' : 'all' });
            changeStyleCSS(".lContent__story" , { 'pointer-events' : 'all' });
            changeStyleCSS(".rContent__project" , { 'pointer-events' : 'all' });
        }, 2600);
    });
    // eslint-disable-next-line no-undef
    $(".logo__img").click(function() {
        changeStyleCSS(".video__contactLoop" , {visibility : 'hidden', opacity : 0, 'z-index' : 0 });
        changeStyleCSS(".video__contactToHome" , {visibility : 'visible',  opacity : 1 , 'z-index' : 1});
        videoContactToHome.play();
        changeStyleCSS(".lContent__logo" , { 'pointer-events' : 'none' });
        changeStyleCSS(".lContent__story" , { 'pointer-events' : 'none' });
        changeStyleCSS(".rContent__project" , { 'pointer-events' : 'none' });
        setTimeout(function() {
            changeStyleCSS(".video__contactToHome" , {transform: 'translate(0%, 0%) scale(0.95)', transition : '0.8s'});
        }, 200);
        setTimeout(function() {
            changeStyleCSS(".video__homeLoop" , {visibility : 'visible', opacity : 1, 'z-index' : 1});
            changeStyleCSS(".video__contactToHome" , {visibility : 'hidden',  opacity : 0 , 'z-index' : 0 });
            videoContactLoop.load();
            videoHomeLoop.load();
            videoHomeLoop.play();
        }, 1850);
        setTimeout(function() {
            changeStyleCSS(".lContent__logo" , { 'pointer-events' : 'none' }); 
            changeStyleCSS(".rContent__contact" , { 'pointer-events' : 'all' });
            changeStyleCSS(".lContent__story" , { 'pointer-events' : 'all' });
            changeStyleCSS(".rContent__project" , { 'pointer-events' : 'all' });
        }, 2500);
        setTimeout(function() {
            changeStyleCSS(".video__contactToHome" , { transform: 'translate(-70%, 0%) scale(1.0)' , transition : '0s'});
        }, 2700);
    });

    // // PLAY PAUSE MUSIC BACKGROUND
    // const btnPlayPause = document.getElementById("bgMusic");
    // $("#soundPlayPause").click(function(){
    //     if($(this).prop("checked") == true){
    //         $(".icSound").css("stroke", "#FF5500");
    //         $(".icon__ani1").css("animation", "musicBar1 2s linear infinite");
    //         $(".icon__ani2").css("animation", "musicBar2 4s linear infinite");
    //         btnPlayPause.play();
    //     }
    //     else if($(this).prop("checked") == false){
    //         $(".icSound").css("stroke", "#CCC");
    //         $(".icon__ani1").css("animation", "");
    //         $(".icon__ani2").css("animation", "");
    //         btnPlayPause.pause();
    //     }
    // });
    // // CHANGE TEXT
    // (function(){
    //     var words = [
    //         'My zodiac is the Scorpio',
    //         'I like time travel stories, which make me curious about how this universe works',
    //         "I'm Thuan Vo, a guy who loves designing frontend, writing and love cats",
    //         ], i = 0;
    //     setInterval(function(){
    //         $('#introChange').fadeOut(function(){
    //             $(this).html(words[i=(i+1)%words.length]).fadeIn('slow');
    //         });
    //     }, 6000);
    // })();
});
function changeStyleCSS (elm , styles) {
    // eslint-disable-next-line no-undef
    $(elm).css(styles);
} 
   
