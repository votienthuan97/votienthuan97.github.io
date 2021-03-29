$(document).ready(function () {
     // CUSTOM SCROLL
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        direction : 'horizontal',
        smooth: true,
        lerp : 0.05,
        tablet : {
            lerp : 0.1,
            smooth : true,
            direction : 'vertical',
        },
        smartphone: {
            lerp : 0.1,
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

  