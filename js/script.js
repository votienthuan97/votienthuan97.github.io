$(document).ready(function () {
    // PLAY PAUSE MUSIC BACKGROUND
    const btnPlayPause = document.getElementById("bgMusic");
    $("#soundPlayPause").click(function(){
        if($(this).prop("checked") == true){
            $(".icon__item").css("background-color", "#F2DA87");
            btnPlayPause.play();
        }
        else if($(this).prop("checked") == false){
            $(".icon__item").css("background-color", "#CCC");
            btnPlayPause.pause();
        }
    });
});


   
