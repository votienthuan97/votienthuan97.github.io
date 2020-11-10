$(document).ready(function () {
    // PLAY PAUSE MUSIC BACKGROUND
    const btnPlayPause = document.getElementById("bgMusic");
    $("#soundPlayPause").click(function(){
        if($(this).prop("checked") == true){
            $(".icSound").css("stroke", "#FF5500");
            $(".icon__ani1").css("animation", "musicBar1 2s linear infinite");
            $(".icon__ani2").css("animation", "musicBar2 4s linear infinite");
            btnPlayPause.play();
        }
        else if($(this).prop("checked") == false){
            $(".icSound").css("stroke", "#CCC");
            $(".icon__ani1").css("animation", "");
            $(".icon__ani2").css("animation", "");
            btnPlayPause.pause();
        }
    });
    // CHANGE TEXT
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
    // SHOW CONTACT
    const videoHomeLoop = document.getElementById("vdHomeLoop");
    const videoHomeToContact = document.getElementById("vdHomeToContact");
    const videoContactLoop = document.getElementById("vdContactLoop");
    const videoContactToHome = document.getElementById("vdContactToHome");
    $("#showHideContact").click(function() {
        if($(this).prop("checked") == true) {
            // PLAY VIDEO MOBILE
            const videoContactLoopMobile = document.getElementById("vdContactLoopMobile");
            setTimeout(function() {
                videoContactLoopMobile.load();
                videoContactLoopMobile.play();
            }, 400);
            // CONTENT HOME
            setTimeout(function() {
                changeStyleCSS(".home" , {visibility : "hidden", opacity : 0});
            }, 100);
            // CONTENT CONTACT
            setTimeout(function() {
                changeStyleCSS(".contact" , {visibility : "visible", opacity : 1});
            }, 1700);
            // TEXT CHECK
            changeStyleCSS(".link__text" , {visibility : "hidden", opacity : 0});
            changeStyleCSS("#showHideContact" , {width : "0px", height : "0px"});
            setTimeout(function() {
                changeStyleCSS(".link__close" , {visibility : "visible", opacity : 1, transform : "scaleY(1.0)" });
            }, 2100);
            setTimeout(function() {
                changeStyleCSS("#showHideContact" , {width : "100%", height : "100%"});
            }, 2400);
            // HOME LOOP
            setTimeout(function() {
                changeStyleCSS(".video__homeLoopVideo" , {visibility : "hidden", opacity : 0 , "z-index" : 0});
            }, 600);
             // HOME TO CONTACT
            changeStyleCSS(".video__homeToContactVideo" , {"z-index" : 2, "opacity" : 1});
            videoHomeToContact.load();
            videoHomeToContact.play();
            setTimeout(function() {
                changeStyleCSS(".video__homeToContactVideo" , {visibility : "visible", opacity : 1 , "transition" : "0.8s"});
            }, 400);
            setTimeout(function() {
                changeStyleCSS(".video__homeToContactVideo" , {transform : "translate(-70% , 0%)" });
            }, 1200);
            setTimeout(function() {
                $(".video__homeToContactVideo").css("visibility", "hidden");
                $(".video__homeToContactVideo").css("transform", "translate(0% , 0%)");
            }, 3000);
            setTimeout(function() {
                $(".video__homeToContactVideo").css("z-index", "0");
                $(".video__homeToContactVideo").css("opacity", "0");
            }, 2400);
            // CONTACT LOOP
            setTimeout(function() {
                $(".video__contactLoopVideo").css("visibility", "visible");
                $(".video__contactLoopVideo").css("opacity", "1");
            }, 2400);
            setTimeout(function() {
                videoContactLoop.load();
                videoContactLoop.play();
            }, 2400);
        }
        else if($(this).prop("checked") == false) {
            // CONTENT HOME
            setTimeout(function() {
                $(".home").css("visibility", "visible");
                $(".home").css("opacity", "1");
            }, 2200);
            // CONTENT CONTACT
            setTimeout(function() {
                $(".contact").css("visibility", "hidden");
                $(".contact").css("opacity", "0");
            }, 200);
            // TEXT CHECK
            $(".link__close").css("visibility", "hidden");
            $(".link__close").css("opacity", "0");
            $(".link__close").css("transform", "scaleY(0)");
            $("#showHideContact").css("width", "0px");
            $("#showHideContact").css("height", "0px");
            setTimeout(function() {
                $(".link__text").css("visibility", "visible");
                $(".link__text").css("opacity", "1");
            }, 2000);
            setTimeout(function() {
                $("#showHideContact").css("width", "100%");
                $("#showHideContact").css("height", "100%");
            }, 2400);
              // HOME LOOP
            $(".video__homeLoopVideo").css("visibility", "visible");
            $(".video__homeLoopVideo").css("opacity", "1");
            $(".video__homeLoopVideo").css("transition", "0.1s");
            $(".video__homeLoopVideo").css("transition-delay", "2.18s");
            $(".video__homeLoopVideo").css("z-index", "2");
            setTimeout(function() {
                $(".video__homeLoopVideo").css("transition", "0s");
                $(".video__homeLoopVideo").css("transition-delay", "0s");
            }, 200);
             // HOME TO CONTACT
            $(".video__homeToContactVideo").css("visibility", "hidden");
            $(".video__homeToContactVideo").css("opacity", "0");
            setTimeout(function() {
                $(".video__homeToContactVideo").css("z-index", "0");
                $(".video__homeToContactVideo").css("opacity", "1");
            }, 2000);
            setTimeout(function() {
                $(".video__homeToContactVideo").css("opacity", "0");
            }, 2400);
            // CONTACT LOOP
            $(".video__contactLoopVideo").css("z-index", "0");
            setTimeout(function() {
                $(".video__contactLoopVideo").css("opacity", "0");
                $(".video__contactLoopVideo").css("visibility", "hidden");
                
            }, 400);
            setTimeout(function() {
                $(".video__contactLoopVideo").css("z-index", "1");
            }, 1000)
            // CONTACT TO HOME
            $(".video__contacToHomeVideo").css("visibility", "visible");
            $(".video__contacToHomeVideo").css("opacity", "1");
            videoContactToHome.load();
            videoContactToHome.play();
            setTimeout(function() {
                $(".video__contacToHomeVideo").css("transition", "0.8s");
                $(".video__contacToHomeVideo").css("transform", "translate(0% , -4.5%) scale(0.95)");
            }, 400);
            setTimeout(function() {
                videoHomeLoop.load();
            }, 2200);
            setTimeout(function() {
                $(".video__contacToHomeVideo").css("visibility", "hidden");
                $(".video__contacToHomeVideo").css("opacity", "0");
                $(".video__contacToHomeVideo").css("transition", "0s");
            }, 2400);
            setTimeout(function() {
                $(".video__contacToHomeVideo").css("transform", "translate(-70% , 0%) scale(1.0)");
            }, 3000);
        }
    });
});
function changeStyleCSS (elm , styles) {
    $(elm).css(styles);
} 
   
