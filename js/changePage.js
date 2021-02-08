// CALL VIDEO
const vdIntro = document.getElementById("vdIntro");
const vdHomeLoop = document.getElementById("vdHomeLoop");
const vdHomeToContact = document.getElementById("vdHomeToContact");
const vdContactLoop = document.getElementById("vdContactLoop");
const vdContactToHome = document.getElementById("vdContactToHome");
const vdHomeToProject = document.getElementById("vdHomeToProject");
const vdProjectLoop = document.getElementById("vdProjectLoop");
const vdProjectToHome = document.getElementById("vdProjectToHome");
// ---------------------- LOAD PAGE INTRO
if($(window).width() <= '1200') {
    showElm('.video__homeLoop');
    upIndex('.video__homeLoop');
    vdHomeLoop.load();
    vdHomeLoop.play();
}
else {
    setTimeout(function(){
        vdIntro.load();
    }, 4800);
    setTimeout(function(){
        showElm('.video__intro');
        vdIntro.play();
        vdHomeLoop.load();
    }, 5000);
    setTimeout(function(){
        showLinkPage();
        downIndex('.video__intro');
        upIndex('.video__homeLoop');
        showElm('.video__homeLoop');
        hiddenElm('.video__intro');
        vdHomeLoop.play();
    }, 9250);
}
// ---------------------- X PAGE TO HOME
$(".left__home").click(function() {
    showPage('#homePage');
    showElm('.home');
    // ---------------------- CONTACT TO HOME
    if($('#contactPage').prop("checked") == true) {
        hiddenLinkPage();
        hiddenPage('#contactPage');
        hiddenElm('.contact');
        downIndex('.video__contactLoop');
        upIndex('.video__contactToHome');
        showElm('.video__contactToHome');
        vdContactToHome.play(); 
        setTimeout(function() {
            hiddenElm('.video__contactLoop');
        }, 150);
        setTimeout(function(){
            changeStyleCSS(vdContactToHome , {'transform' : 'translate(0%, 0%)', 'transition' : '0.8s ease-in-out'});
        }, 450);
        setTimeout(function(){ 
            showElm('.video__homeLoop');
        }, 1250);
        setTimeout(function(){
            downIndex('.video__contactToHome');
            upIndex('.video__homeLoop');
            vdHomeLoop.load();
            vdHomeLoop.play();
            showLinkPage();
            showElm('.right__contact');
        }, 2250);
        setTimeout(function(){
            hiddenElm('.video__contactToHome');
            showElm('.video__homeToContact');
            changeStyleCSS(vdContactToHome , {'transform' : 'translate(-80%, 0%)', 'transition' : '0s'});
        }, 2350);
    }
    // ---------------------- STORY TO HOME
    else if($('#storyPage').prop("checked") == true) {
        hiddenPage('#storyPage');
        hiddenElm('.story');
    }
    //---------------------- PROJECT TO HOME
    else if($('#projectPage').prop("checked") == true) {
        hiddenLinkPage();
        hiddenPage('#projectPage');
        hiddenElm('.project');
        showElm('.video__projectToHome');
        vdProjectToHome.play();
        setTimeout(function(){ 
            downIndex('.video__homeLoop');
            upIndex('.video__homeToProject');
            downIndex('.video__projectLoop');
            hiddenElm('.video__projectLoop');
            changeStyleCSS(vdProjectToHome , {});
        }, 150);
        setTimeout(function(){ 
            changeStyleCSS(vdProjectToHome , {'transform' : 'translate(-20.75%, -6px)', 'transition' : '0.8s ease-in-out 0.25s'});
            changeStyleCSS($('.video__projectToHome .removeBackground') , {'transform' : 'translate(-19.25%, -6px)', 'transition' : '0.8s ease-in-out 0.25s'});
        }, 450);
        setTimeout(function(){ 
            showElm('.video__homeLoop');
        }, 1500);
        setTimeout(function(){
            vdHomeLoop.load();
            downIndex('.video__projectToHome');
            upIndex('.video__homeLoop');
        }, 2400);
        setTimeout(function(){
            vdHomeLoop.play();
            showLinkPage();
            showElm('.right__project');
        }, 2450);
        setTimeout(function(){
            hiddenElm('.video__projectToHome');
            downIndex('.video__homeToProject');
            changeStyleCSS(vdProjectToHome , {'transform' : 'translate(-80%, 0px)', 'transition' : '0s'});
            changeStyleCSS($('.video__projectToHome .removeBackground'), {'transform' : 'translate(-78.5%, -6px)', 'transition' : '0s'});
        }, 2550);
    }
});


// ---------------------- X PAGE TO CONTACT
$(".right__contact").click(function() {
    showPage('#contactPage');
    showElm('.contact');
    // ---------------------- HOME TO CONTACT
    if($('#homePage').prop("checked") == true) {
        hiddenLinkPage();
        hiddenPage('#homePage');
        hiddenElm('.home');
        hiddenElm('.video__homeToProject');
        downIndex('.video__homeLoop');
        upIndex('.video__homeToContact');
        showElm('.video__homeToContact');
        vdHomeToContact.play();
        setTimeout(function(){ 
            hiddenElm('.video__homeLoop');
        }, 150);
        setTimeout(function(){
            changeStyleCSS(vdHomeToContact , {'transform' : 'translate(-80%, 0%)', 'transition' : '0.8s ease-in-out 0.25s'});
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
            showLinkPage();
            hiddenElm('.right__contact');
        }, 2500);
        setTimeout(function(){
            changeStyleCSS(vdHomeToContact , {'transform' : 'translate(0%, 0%)', 'transition' : '0s'});
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
        hiddenLinkPage();
        hiddenPage('#homePage');
        hiddenElm('.home');
        hiddenElm('.video__homeToContact');
        showElm('.video__homeToProject');
        downIndex('.video__homeLoop');
        upIndex('.video__homeToProject'); 
        setTimeout(function(){
            vdHomeToProject.play();
            hiddenElm('.video__homeLoop');
            changeStyleCSS(vdHomeToProject , {'transition' : '0.8s ease-in-out'});
            changeStyleCSS($('.video__homeToProject .removeBackground') , {'transition' : '0.8s ease-in-out'});
        }, 150);
        setTimeout(function(){ 
            changeStyleCSS(vdHomeToProject , {'transform' : 'translate(-80%, -5px)'});
            changeStyleCSS($('.video__homeToProject .removeBackground') , {'transform' : 'translate(-78%, -5px)'});
            vdProjectLoop.load();
        }, 450);
        setTimeout(function(){ 
            showElm('.video__projectLoop');
        }, 1500);
        setTimeout(function(){
            downIndex('.video__homeToProject');
            upIndex('.video__projectLoop');
            hiddenElm('.video__homeToProject');
            vdProjectLoop.play();
            hiddenElm('.right__project');
        }, 2300);
        setTimeout(function(){
            showLinkPage();
            vdHomeToProject.load();
            changeStyleCSS(vdHomeToProject , {'transition' : '0s'});
            changeStyleCSS(vdHomeToProject , {'transform' : 'translate(-130px, -5px)'});
            changeStyleCSS($('.video__homeToProject .removeBackground') , {'transform' : 'translate(-125px, -5px)'});
            changeStyleCSS($('.video__homeToProject .removeBackground') , {'transition' : '0s'});
        }, 2450);
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
