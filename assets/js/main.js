$(document).ready(function () {
    // OPINIONS CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Newsletter Form
    const newsletterWrapper = $('.newsletter-form-wrapper');
    const newsletterContainer = $('.newsletter-form');
    const newsletterCloseBtn = $('.newsletter-form__close-button');
    const triggerButton = $('.page-button');

    function modalNewsletter() {
        newsletterWrapper.hide();
        newsletterContainer.hide();
        triggerButton.on('click', function () {
            newsletterWrapper.fadeIn();
            newsletterContainer.slideDown();
        });
        newsletterCloseBtn.on('click', function () {
            newsletterWrapper.fadeOut();
            newsletterContainer.slideUp();
        });
    }

    function mobileNewsletter() {
        newsletterWrapper.show();
        newsletterContainer.show();
        triggerButton.on('click', function () {
            $('html, body').animate({
                scrollTop: $(newsletterContainer).offset().top
            }, 2000);
        });
    }
    // Jeśli przeglądarka ma szerokość mniejszą lub równą 580px lub mniejsza lub równa wysokości 515px to:
    if ($(window).width() <= 580 || $(window).height() <= 515) {

        mobileNewsletter();
    } else {

        modalNewsletter();
    }

    // Zmiana title po opusczeniu karty
    var message = "Zagraj w Strzałki!";
    var original;

    $(window).focus(function () {
        if (original) {
            document.title = original;
        }
    }).blur(function () {
        var title = $('title').text();
        if (title != message) {
            original = title;
        }
        document.title = message;
    });
});