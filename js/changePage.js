// CALL VIDEO
const vdHomeLoop = document.getElementById("vdHomeLoop");
const vdHomeToContact = document.getElementById("vdHomeToContact");
const vdContactLoop = document.getElementById("vdContactLoop");
const vdContactToHome = document.getElementById("vdContactToHome");
// ---------------------- X PAGE TO HOME
$(".left__home").click(function() {
    showPage('#homePage');
    showElm('.home');
    // ---------------------- CONTACT TO HOME
    if($('#contactPage').prop("checked") == true) {
        vdContactToHome.load(); 
        hiddenPage('#contactPage');
        hiddenElm('.contact');
        downIndex('.video__contactLoop');
        upIndex('.video__contactToHome');
        showElm('.video__contactToHome');
        vdContactToHome.play(); 
        setTimeout(function() {
            hiddenElm('.video__contactLoop');
            changeStyleCSS(vdContactToHome , {'transition' : '0.8s ease-in-out'});
        }, 150);
        setTimeout(function(){ 
            changeStyleCSS(vdContactToHome , {'transform' : 'translate(0%, 0%)'});
        }, 450);
        setTimeout(function(){ 
            showElm('.video__homeLoop');
        }, 1250);
        setTimeout(function(){
            downIndex('.video__contactToHome');
            upIndex('.video__homeLoop');
            vdHomeLoop.load();
            vdHomeLoop.play();
        }, 2250);
        setTimeout(function(){
            hiddenElm('.video__contactToHome');
            showElm('.video__homeToContact');
            changeStyleCSS(vdContactToHome , {'transform' : 'translate(-80%, 0%)'});
        }, 2350);
    }
    // ---------------------- STORY TO HOME
    else if($('#storyPage').prop("checked") == true) {
        hiddenPage('#storyPage');
        hiddenElm('.story');
    }
    // ---------------------- PROJECT TO HOME
    else if($('#projectPage').prop("checked") == true) {
        hiddenPage('#projectPage');
        hiddenElm('.project');
    }
});


// ---------------------- X PAGE TO CONTACT
$(".right__contact").click(function() {
    showPage('#contactPage');
    showElm('.contact');
    // ---------------------- HOME TO CONTACT
    if($('#homePage').prop("checked") == true) {
        hiddenPage('#homePage');
        hiddenElm('.home');
        vdHomeToContact.load();
        showElm('.video__homeToContact');
        vdHomeToContact.play();
        setTimeout(function(){ 
            downIndex('.video__homeLoop');
            upIndex('.video__homeToContact');
            hiddenElm('.video__homeLoop');
            changeStyleCSS(vdHomeToContact , {'transition' : '0.8s ease-in-out 0.25s'});
        }, 150);
        setTimeout(function(){ 
            changeStyleCSS(vdHomeToContact , {'transform' : 'translate(-80%, 0%)'});
            vdContactLoop.load();
        }, 450);
        setTimeout(function(){ 
            showElm('.video__contactLoop');
        }, 1250);
        setTimeout(function(){
            downIndex('.video__homeToContact');
            upIndex('.video__contactLoop');
            hiddenElm('.video__homeToContact');
            vdContactLoop.play();
        }, 2500);
        setTimeout(function(){
            changeStyleCSS(vdHomeToContact , {'transform' : 'translate(0%, 0%)'});
        }, 2600);
    }
    // ---------------------- STORY TO CONTACT
    else  if($('#storyPage').prop("checked") == true) {
        hiddenPage('#storyPage');
        hiddenElm('.story');
    }
    // ---------------------- PROJECT TO CONTACT
    else  if($('#projectPage').prop("checked") == true) {
        hiddenPage('#projectPage');
        hiddenElm('.project');
    }
});



// ---------------------- X PAGE TO STORY
$(".left__story").click(function() {
    showPage('#storyPage');
    showElm('.story');
    // ---------------------- HOME TO STORY
    if($('#homePage').prop("checked") == true) {
        hiddenPage('#homePage');
        hiddenElm('.home');
    }
    // ---------------------- CONTACT TO STORY
    else  if($('#contactPage').prop("checked") == true) {
        hiddenPage('#contactPage');
        hiddenElm('.contact');
    }
    // ---------------------- PROJECT TO STORY
    else  if($('#projectPage').prop("checked") == true) {
        hiddenPage('#projectPage');
        hiddenElm('.project');
    }
});

// ---------------------- X PAGE TO PROJECT
$(".right__project").click(function() {
    showPage('#projectPage');
    showElm('.project');
    // ---------------------- HOME TO PROJECT
    if($('#homePage').prop("checked") == true) {
        hiddenPage('#homePage');
        hiddenElm('.home');
    }
    // ---------------------- CONTACT TO PROJECT
    else  if($('#contactPage').prop("checked") == true) {
        hiddenPage('#contactPage');
        hiddenElm('.contact');
    }
    // ---------------------- STORY TO PROJECT
    else  if($('#storyPage').prop("checked") == true) {
        hiddenPage('#storyPage');
        hiddenElm('.story');
    }
});
