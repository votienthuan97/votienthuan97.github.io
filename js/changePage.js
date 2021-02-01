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
setTimeout(function(){
    showElm('.video__intro');
    vdIntro.play();
    vdHomeLoop.load();
}, 5000);
setTimeout(function(){
    showLinkPage();
    showElm('.video__homeLoop');
    upIndex('.video__homeLoop');
    vdHomeLoop.play();
}, 9380);
setTimeout(function(){
    downIndex('.video__intro');
    hiddenElm('.video__intro');
    showLinkPage();
}, 9400);
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
            downIndex('.video__homeToContact');
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
        showElm('.video__projectToHome');
        vdProjectToHome.play();
        setTimeout(function(){ 
            downIndex('.video__homeLoop');
            upIndex('.video__homeToProject');
            downIndex('.video__projectLoop');
            hiddenElm('.video__projectLoop');
            changeStyleCSS(vdProjectToHome , {'transition' : '0.8s ease-in-out 0.25s'});
            changeStyleCSS($('.video__projectToHome .removeBackgroundBefore') , {'transition' : '0.8s ease-in-out 0.25s'});
            changeStyleCSS($('.video__projectToHome .removeBackgroundAfter') , {'transition' : '0.8s ease-in-out 0.25s'});
        }, 150);
        setTimeout(function(){ 
            changeStyleCSS(vdProjectToHome , {'transform' : 'translate(-20.75%, -6px)'});
            changeStyleCSS($('.video__projectToHome .removeBackgroundBefore') , {'transform' : 'translate(-17.5%, -6px)'});
            changeStyleCSS($('.video__projectToHome .removeBackgroundAfter') , {'transform' : 'translate(-20.5%, -6px)'});
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
        }, 2500);
        setTimeout(function(){
            hiddenElm('.video__projectToHome');
            showElm('.video__homeToProject');
            downIndex('.video__homeToProject');
            changeStyleCSS(vdProjectToHome , {'transform' : 'translate(-80%, 0px)'});
            changeStyleCSS($('.video__projectToHome .removeBackgroundBefore'), {'transform' : 'translate(-77%, -6px)'});
            changeStyleCSS($('.video__projectToHome .removeBackgroundAfter'), {'transform' : 'translate(-80%, -6px)'});
        }, 2600);
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
        showElm('.video__homeToContact');
        vdHomeToContact.play();
        setTimeout(function(){
            upIndex('.video__homeToContact');
            hiddenElm('.video__homeLoop');
            hiddenElm('.video__homeToProject');
            changeStyleCSS(vdHomeToContact , {'transition' : '0.8s ease-in-out 0.25s'});
        }, 50);
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
        }, 2400);
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
        showElm('.video__homeToProject');
        downIndex('.video__homeLoop');
        upIndex('.video__homeToProject'); 
        setTimeout(function(){
            vdHomeToProject.play();
            hiddenElm('.video__homeLoop');
            changeStyleCSS(vdHomeToProject , {'transition' : '0.8s ease-in-out 0.25s'});
            changeStyleCSS($('.video__homeToProject .removeBackgroundBefore') , {'transition' : '0.8s ease-in-out 0.25s'});
            changeStyleCSS($('.video__homeToProject .removeBackgroundAfter') , {'transition' : '0.8s ease-in-out 0.25s'});
        }, 150);
        setTimeout(function(){ 
            changeStyleCSS(vdHomeToProject , {'transform' : 'translate(-80%, -5px)'});
            changeStyleCSS($('.video__homeToProject .removeBackgroundBefore') , {'transform' : 'translate(-75%, -5px)'});
            changeStyleCSS($('.video__homeToProject .removeBackgroundAfter') , {'transform' : 'translate(-80%, -5px)'});
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
        }, 2300);
        setTimeout(function(){
            vdHomeToProject.load();
            changeStyleCSS(vdHomeToProject , {'transform' : 'translate(-130px, -5px)'});
            changeStyleCSS($('.video__homeToProject .removeBackgroundBefore') , {'transform' : 'translate(-115px, -5px)'});
            changeStyleCSS($('.video__homeToProject .removeBackgroundAfter') , {'transform' : 'translate(-120px, -5px)'});
        }, 2400);
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
