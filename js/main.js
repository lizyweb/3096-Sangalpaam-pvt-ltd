document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

  (function ($) {
    
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    })(jQuery);

    jQuery(function ($) {
      'use strict';
    
      $(document).ready(function () {
    
        // banner-carousel
        function bannerCarouselOne() {
          $('.banner-carousel.banner-carousel-1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            speed: 600,
            arrows: true,
            prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
          });
          $('.banner-carousel.banner-carousel-1').slickAnimation();
        }
        bannerCarouselOne();
    
        // banner Carousel Two
        function bannerCarouselTwo() {
          $('.banner-carousel.banner-carousel-2').slick({
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            speed: 600,
            arrows: true,
            prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
          });
        }
        bannerCarouselTwo();
    
        // pageSlider
        function pageSlider() {
          $('.page-slider').slick({
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            speed: 600,
            arrows: true,
            prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
          });
        }
        pageSlider();
    
      });
    
    });

    (function ($) {
      "use strict";
    
      var review = $('.textimonial_iner');
      if (review.length) {
        review.owlCarousel({
          items: 1,
          loop: true,
          dots: true,
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: 3000,
          nav: false,
          responsive: {
            0: {
              margin: 15,
            },
            600: {
              margin: 10,
            },
            1000: {
              margin: 10,
            }
          }
        });
      }
    
    }(jQuery));
});

document.addEventListener("DOMContentLoaded", function () {
  // Create a new button element
  var closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "close d-flex align-items-center justify-content-center";
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  // Create an icon element for the close button
  var closeIcon = document.createElement("i");
  closeIcon.className = "bx bx-window-close";
  closeIcon.setAttribute("aria-hidden", "true");

  // Append the icon to the button
  closeButton.appendChild(closeIcon);

  // Find the modal content and append the close button
  var modalContent = document.querySelector("#exampleModal .modal-content");
  if (modalContent) {
      modalContent.insertBefore(closeButton, modalContent.firstChild);

      // Attach a click event listener to close the modal
      closeButton.addEventListener("click", function () {
          $('#exampleModal').modal('hide');
      });
  }
});

