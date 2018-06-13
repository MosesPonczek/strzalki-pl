$(document).ready(function(){

// OPINIONS CAROUSEL

$('.owl-carousel').owlCarousel({
    loop:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Newsletter Form

function modalNewsletter() {
    const newsletterWrapper = $('.newsletter-form-wrapper');
    const newsletterContainer = $('.newsletter-form');
    const newsletterCloseBtn = $('.newsletter-form__close-button');
    const triggerButton = $('.page-button');

    newsletterWrapper.hide();
    newsletterContainer.hide();

    triggerButton.on('click', function(){
        newsletterWrapper.fadeIn();
        newsletterContainer.slideDown();
    });
    newsletterCloseBtn.on('click', function(){
        newsletterWrapper.fadeOut();
        newsletterContainer.slideUp();
    });
}

modalNewsletter();

});

