$(document).ready(function () {
    // PLAY PAUSE MUSIC BACKGROUND
    const btnPlayPause = document.getElementById("bgMusic");
    $("#soundPlayPause").click(function(){
        if($(this).prop("checked") == true){
            $(".icon__item").css("background-color", "#1A2743");
            $(".icon__ani1").css("animation", "musicBar1 3s linear infinite");
            $(".icon__ani2").css("animation", "musicBar2 2s linear infinite");
            btnPlayPause.play();
        }
        else if($(this).prop("checked") == false){
            $(".icon__item").css("background-color", "#CCC");
            $(".icon__ani1").css("animation", "");
            $(".icon__ani2").css("animation", "");
            btnPlayPause.pause();
        }
    });
});


   
