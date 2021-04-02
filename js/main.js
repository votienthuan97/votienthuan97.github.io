$(document).ready(function () {
     // CUSTOM SCROLL
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        direction : 'horizontal',
        smooth: true,
        lerp : 0.05,
        tablet : {
            lerp : 0.2,
            smooth : true,
            direction : 'vertical',
        },
        smartphone: {
            lerp : 0.2,
            smooth: true,
            direction : 'vertical'
        }
    });
   // SCROLL TO DIV
    var btnMenu = false;
    $('.content__itemLink').click(function() {
        const sectionID = $(this).data('scroll-section-id');
        scroll.scrollTo(sectionID);
        $('.menu').removeClass('open');
        $('.btnOpenMenu__ic').removeClass('open');
        btnMenu = false;
    });
    // SHOW MENU MOBI
    $('.headerWeb__btnOpenMenu').click(function() {
        btnMenu = !btnMenu;
        if (btnMenu === false) {
            $('.menu').removeClass('open');
            $('.btnOpenMenu__ic').removeClass('open');
        }
        else {
            $('.menu').addClass('open');
            $('.btnOpenMenu__ic').addClass('open');
        }
    });
    // CHANE INTRODUCE
    setTimeout(function(){ 
    (function() {
        var quotes = $(".introduce__item");
        var quoteIndex = -1;
        function showNextQuote() {
          ++quoteIndex;
          quotes.eq(quoteIndex % quotes.length)
            .fadeIn(4000)
            .delay(0)
            .fadeOut(2000, showNextQuote);
        }
        showNextQuote();
    })();
    }, 5500);
     // CHANE BACKGROUND LOAD
     (function() {
        var quotes = $(".backgroundLoading__content");
        var quoteIndex = -1;
        function showNextQuote() {
          ++quoteIndex;
          quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(0)
            .fadeOut(1000, showNextQuote);
        }
        showNextQuote();
    })();
    setTimeout(function(){ 
        $('.backgroundLoading').css('transform', 'translate(0%, -105%) matrix(1, 0, 0, 1, 0, 0)');
        $('.backgroundLoading').css('height', '0vh');
    }, 3500);
    // LOCK LOCOMOTIVE SCROLL WHEN SCROLL DIV DIFFRENCE
    $('.listSelect').hover(function() {
        scroll.stop();
    }, function() {
        scroll.start();
    });
    // SCROLL FUNCTION
    scroll.on('scroll', func => {
       
    });
});

  