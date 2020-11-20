$(document).ready(function () {
    // INTRO TEXT CHANGE
    // CHANGE TEXT
    setTimeout(() => {
    (function(){
        var words = [
            'My zodiac is the Scorpio',
            'I like time travel stories, which make me curious about how this universe works',
            "I'm Thuan Vo, a guy who loves designing frontend, writing and love cats",
            ], i = 0;
        setInterval(function(){
            $('#introChange').fadeOut(function(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn('slow');
            });
        }, 6000);
    })();
    }, 4400);
    // PLAY PAUSE MUSIC BACKGROUND
    const btnPlayPause = document.getElementById("bgMusic");
    $("#soundPlayPause").click(function() {
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
    const videoHomeToContact = document.getElementById("vdHomeToContact");
    const videoContactLoop = document.getElementById("vdContactLoop");
    const videoContactToHome = document.getElementById("vdContactToHome");
    // INTRO > HOME
    setTimeout(() => {
        changeStyleCSS('.video__homeLoop' , {visibility : 'visible', opacity : 1, 'z-index' : 1});
        changeStyleCSS('.video__intro' , {visibility : 'hidden', opacity : 0, 'z-index' : 0});
        changeStyleCSS('.home' , {visibility : 'visible', opacity : 1});
        changeStyleCSS('.headerWeb' , {visibility : 'visible', opacity : 1, transform: 'translateY(0px)'});
        changeStyleCSS('.footerWeb' , {visibility : 'visible', opacity : 1, transform: 'translateY(0px)'});
        showPage('#pageHome');
        videoHomeLoop.play();
    }, 4400);
    // X PAGE TO HOME
    $(".logo__img").click(function() {
        showPage('#pageHome');
        if($('#pageContact').prop("checked") == true) {
            hiddenPage('#pageContact');
            changeStyleCSS(".video__contactLoop" , {visibility : 'hidden', opacity : 0, 'z-index' : 0 });
            changeStyleCSS(".video__contactToHome" , {visibility : 'visible',  opacity : 1 , 'z-index' : 1});
            videoContactToHome.play();
            changeStyleCSS('.headerWeb' , {visibility : 'hidden', opacity : 0, transform: 'translateY(-30px)'});
            changeStyleCSS('.footerWeb' , {visibility : 'hidden', opacity : 0, transform: 'translateY(30px)'});
            setTimeout(function() {
                changeStyleCSS(".video__contactToHome" , {transform: 'translate(0%, 0%) scale(0.95)', transition : '0.8s'});
            }, 200);
            setTimeout(function() {
                changeStyleCSS('.headerWeb' , {visibility : 'hidden', opacity : 0, transform: 'translateY(30px)'});
                changeStyleCSS('.footerWeb' , {visibility : 'hidden', opacity : 0, transform: 'translateY(-30px)'});
                changeStyleCSS(".video__homeLoop" , {visibility : 'visible', opacity : 1, 'z-index' : 1});
                changeStyleCSS(".video__contactToHome" , {visibility : 'hidden',  opacity : 0 , 'z-index' : 0 });
                videoContactLoop.load();
                videoHomeLoop.load();
                videoHomeLoop.play();
            }, 1900);
            setTimeout(function() {
                changeStyleCSS('.headerWeb' , {visibility : 'visible', opacity : 1, transform: 'translateY(0px)'});
                changeStyleCSS('.footerWeb' , {visibility : 'visible', opacity : 1, transform: 'translateY(0px)'});
                changeStyleCSS('.contact__text' , {visibility : 'visible', opacity : 1});
            }, 2500);
            setTimeout(function() {
                changeStyleCSS(".video__contactToHome" , { transform: 'translate(-70%, 0%) scale(1.0)' , transition : '0s'});
            }, 2700);
        }
        else if($('#pageProject').prop("checked") == true) {
            hiddenPage('#pageProject');
        }
        else if($('#pageStory').prop("checked") == true) {
            hiddenPage('#pageStory');
        }
    });
    // X PAGE TO CONTACT
    $(".contact__text").click(function() {
        showPage('#pageContact');
        if($('#pageHome').prop("checked") == true) {
            hiddenPage('#pageHome');
            changeStyleCSS(".video__homeLoop" , {visibility : 'hidden', opacity : 0, 'z-index' : 0});
            changeStyleCSS(".video__homeToContact" , { visibility : 'visible', opacity : 1, 'z-index' : 1 });
            changeStyleCSS('.headerWeb' , {visibility : 'hidden', opacity : 0, transform: 'translateY(-30px)'});
            changeStyleCSS('.footerWeb' , {visibility : 'hidden', opacity : 0, transform: 'translateY(30px)'});
            videoHomeToContact.play();
            setTimeout(function() {
                changeStyleCSS('.headerWeb' , {visibility : 'hidden', opacity : 0, transform: 'translateY(-30px)'});
                changeStyleCSS('.contact__text' , {visibility : 'hidden', opacity : 0});
                changeStyleCSS(".video__homeToContact" , { transform: 'translate(-70%, 0%)', transition : '0.8s' });
            }, 1200); 
            setTimeout(function() {
                changeStyleCSS(".video__homeToContact" , {visibility : 'hidden', opacity : 0, 'z-index' : 0, transform: 'translate(0%, 0%) scale(0.95)', transition : '0s' });
                changeStyleCSS(".video__contactLoop" , {visibility : 'visible', opacity : 1, 'z-index' : 1 });
                videoHomeToContact.load();
                videoContactLoop.play();
                videoContactToHome.load();
                changeStyleCSS('.headerWeb' , {visibility : 'visible', opacity : 1, transform: 'translateY(0px)'});
                changeStyleCSS('.footerWeb' , {visibility : 'visible', opacity : 1, transform: 'translateY(0px)'});
            }, 2600);
        } 
        else if($('#pageProject').prop("checked") == true) {
            hiddenPage('#pageProject');
        }
        else if($('#pageStory').prop("checked") == true) {
            hiddenPage('#pageStory');
        }
    });
    //  X PAGE TO PROJECT
    $(".project__text").click(function() {
        showPage('#pageProject');
        if($('#pageHome').prop("checked") == true) {
            hiddenPage('#pageHome');
        } 
        else if($('#pageContact').prop("checked") == true) {
            hiddenPage('#pageContact');
        }
        else if($('#pageStory').prop("checked") == true) {
            hiddenPage('#pageStory');
        }
    });
    //  X PAGE TO STORY
    $(".story__text").click(function() {
        showPage('#pageStory');
        if($('#pageHome').prop("checked") == true) {
            hiddenPage('#pageHome');
        } 
        else if($('#pageContact').prop("checked") == true) {
            hiddenPage('#pageContact');
        }
        else if($('#pageProject').prop("checked") == true) {
            hiddenPage('#pageProject');
        }
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
function showPage (elm) {
    $(elm).prop('checked', true);
}
function hiddenPage (elm) {
    $(elm).prop('checked', false);
}