$(document).ready(function () {
    // PLAY PAUSE MUSIC BACKGROUND
    const btnPlayPause = document.getElementById("bgMusic");
    $("#soundPlayPause").click(function(){
        if($(this).prop("checked") == true){
            $(".icon__item").css("background-color", "#1A2743");
            $(".icon__ani1").css("animation", "musicBar1 2s linear infinite");
            $(".icon__ani2").css("animation", "musicBar2 4s linear infinite");
            btnPlayPause.play();
        }
        else if($(this).prop("checked") == false){
            $(".icon__item").css("background-color", "#CCC");
            $(".icon__ani1").css("animation", "");
            $(".icon__ani2").css("animation", "");
            btnPlayPause.pause();
        }
    });
    // CHANGE TEXT
    (function(){
        var words = [
            'My zodiac is the Scorpio',
            'I like time travel stories, which make me curious about how this universe works'
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
    const videoContactToHome = document.getElementById("vdContactToHome");
    $("#showHideContact").click(function(){
        if($(this).prop("checked") == true){
            // TEXT
            setTimeout(function() {
                $(".home").css("opacity", "0");
            }, 200);
            // TEXT CHECK
            $(".link__text").css("visibility", "hidden");
            $(".link__text").css("opacity", "0");
            $("#showHideContact").css("width", "0px");
            $("#showHideContact").css("height", "0px");
            setTimeout(function() {
                $(".link__close").css("visibility", "visible");
                $(".link__close").css("opacity", "1");
                $(".link__close").css("transform", "scaleY(1.0)");
            }, 1700);
            setTimeout(function() {
                $("#showHideContact").css("width", "100%");
                $("#showHideContact").css("height", "100%");
            }, 2400);
            // HOME LOOP
            $(".video__homeLoopVideo").css("visibility", "hidden");
            $(".video__homeLoopVideo").css("opacity", "0");
            $(".video__homeLoopVideo").css("transition", "0.2s");
             // HOME TO CONTACT
            $(".video__homeToContactVideo").css("visibility", "visible");
            $(".video__homeToContactVideo").css("opacity", "1");
            $(".video__homeToContactVideo").css("transform", "translate(-70% , 70%)");
            $(".video__homeToContactVideo").css("transition", "1s");
            videoHomeToContact.play();
            setTimeout(function() {
                $(".video__homeToContactVideo").css("visibility", "hidden");
                $(".video__homeToContactVideo").css("transform", "translate(0% , 70%)");
            }, 2500);
            setTimeout(function() {
                $(".video__homeToContactVideo").css("opacity", "0");
            }, 2000);
             // CONTACT LOOP
            setTimeout(function() {
                $(".video__contactLoopVideo").css("visibility", "visible");
                $(".video__contactLoopVideo").css("opacity", "1");
            }, 2000);
        }
        else if($(this).prop("checked") == false) {
            // TEXT
            setTimeout(function() {
                $(".home").css("opacity", "1");
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
              
            }, 1700);
            setTimeout(function() {
                $("#showHideContact").css("width", "100%");
                $("#showHideContact").css("height", "100%");
            }, 2400);
              // HOME LOOP
            $(".video__homeLoopVideo").css("visibility", "visible");
            $(".video__homeLoopVideo").css("opacity", "1");
            $(".video__homeLoopVideo").css("transition", "0.2s");
            $(".video__homeLoopVideo").css("transition-delay", "2.3s");
            setTimeout(function() {
                $(".video__homeLoopVideo").css("transition", "0.2s");
                $(".video__homeLoopVideo").css("transition-delay", "0s");
            }, 2300);
             // HOME TO CONTACT
            $(".video__homeToContactVideo").css("visibility", "hidden");
            $(".video__homeToContactVideo").css("opacity", "0");
            // CONTACT LOOP
            $(".video__contactLoopVideo").css("visibility", "hidden");
            $(".video__contactLoopVideo").css("opacity", "0");
            $(".video__contactLoopVideo").css("transition", "0.2s");
            // CONTACT TO HOME
            $(".video__contacToHomeVideo").css("visibility", "visible");
            $(".video__contacToHomeVideo").css("opacity", "1");
            $(".video__contacToHomeVideo").css("transition", "1.0s");
            $(".video__contacToHomeVideo").css("transform", "translate(0% , 65%) scale(0.95)");
            videoContactToHome.load();
            videoHomeLoop.load();
            setTimeout(function() {
                $(".video__contacToHomeVideo").css("visibility", "hidden");
                $(".video__contacToHomeVideo").css("opacity", "0");
                $(".video__contacToHomeVideo").css("transition", "0.1s");
            }, 2400);
            setTimeout(function() {
                $(".video__contacToHomeVideo").css("transform", "translate(-70% , 70%) scale(1.0)");
            }, 2500);
            
        }
    });
});


   
