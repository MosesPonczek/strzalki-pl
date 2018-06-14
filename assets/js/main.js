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
    // Jeśli przeglądarka ma szerokość wiekszą lub równą 581px to:
    if ($(window).width() >= 581) {
        console.log('Więcej niż 580px! Width.');
        modalNewsletter();
    }
    // Jeśli przeglądarka ma szerokość mniejszą lub równą 580px to:
    if ($(window).width() <= 580) {
        console.log('Mniej lub równe 580px! Width.');
        mobileNewsletter();
    }
    // Jeśli przeglądarka ma wysokość wiekszą lub równą 515px to:
    if ($(window).height() >= 515) {
        console.log('Więcej niż 515px! Height.');
        modalNewsletter();
    }
    // Jeśli przeglądarka ma wysokość mniejszą lub równą 515px to:
    if ($(window).height() <= 515) {
        console.log('Mniej lub równe 515px! Height.');
        mobileNewsletter();
    }
});