// ---------------------- X PAGE TO HOME
$(".left__home").click(function() {
    showPage('#homePage');
    // ---------------------- CONTACT TO HOME
    if($('#contactPage').prop("checked") == true) {
        hiddenPage('#contactPage');
        
    }
    // ---------------------- STORY TO HOME
    else if($('#storyPage').prop("checked") == true) {
        hiddenPage('#storyPage');
    }
    // ---------------------- PROJECT TO HOME
    else if($('#projectPage').prop("checked") == true) {
        hiddenPage('#projectPage');
    }
});


// ---------------------- X PAGE TO CONTACT
$(".right__contact").click(function() {
    showPage('#contactPage');
    // ---------------------- HOME TO CONTACT
    if($('#homePage').prop("checked") == true) {
        hiddenPage('#homePage');
    }
    // ---------------------- STORY TO CONTACT
    else  if($('#storyPage').prop("checked") == true) {
        hiddenPage('#storyPage');
    }
    // ---------------------- PROJECT TO CONTACT
    else  if($('#projectPage').prop("checked") == true) {
        hiddenPage('#projectPage');
    }
});



// ---------------------- X PAGE TO STORY
$(".left__story").click(function() {
    showPage('#storyPage');
    // ---------------------- HOME TO STORY
    if($('#homePage').prop("checked") == true) {
        hiddenPage('#homePage');
    }
    // ---------------------- CONTACT TO STORY
    else  if($('#contactPage').prop("checked") == true) {
        hiddenPage('#contactPage');
    }
    // ---------------------- PROJECT TO STORY
    else  if($('#projectPage').prop("checked") == true) {
        hiddenPage('#projectPage');
    }
});

// ---------------------- X PAGE TO PROJECT
$(".right__project").click(function() {
    showPage('#projectPage');
    // ---------------------- HOME TO PROJECT
    if($('#homePage').prop("checked") == true) {
        hiddenPage('#homePage');
    }
    // ---------------------- CONTACT TO PROJECT
    else  if($('#contactPage').prop("checked") == true) {
        hiddenPage('#contactPage');
    }
    // ---------------------- STORY TO PROJECT
    else  if($('#storyPage').prop("checked") == true) {
        hiddenPage('#storyPage');
    }
});
