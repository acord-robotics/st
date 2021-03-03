/*! Custom Js */

jQuery(document).ready(function($) {

  "use strict"; // Start of use strict

  // video popup form youtube
  $('#popup-youtube').magnificPopup({
    items: {
         src: 'https://www.youtube.com/watch?v=9QscURRuF0g'
       },
    type: 'iframe',
    iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 
          patterns: {
              youtube: {
                  index: 'youtube.com/', 
                  id: 'v=', 
                  src: '//www.youtube.com/embed/%id%?autoplay=1' 
              }
           },
           srcAction: 'iframe_src', 
       }
  });

  // Collection Or Screenshots Or Product Showcase Slider
  $('.product-slider').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        450: {
            items: 2,
            margin: 10
        },
        768: {
            items: 3
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
  });

  // Reviews Or Testimonial Slider
  $('.review-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });

  // Pricing Slider
  $('.pricing-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
  });

  // Blog Slider
  $('.blog-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
  });

  // Certified Slider
  $('.certified-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
  });

  // Back To Top
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').on('click', function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  // Sending Message js
  $('#msg-sending-form').submit(function(event){
      event.preventDefault();
      $('#msg-sending-btn').attr('disabled','disabled').html('<i class="fa fa-spinner fa-pulse fa-fw"></i> Sending...');
      var method = $(this).attr('method');
      var action = $(this).attr('action');
      $.ajax({
          url:action,
          type:method,
          dataType:'json',
          data:$(this).serialize(),
          success:function(res) {
              if(res.status == 'success') {
                  $('#msg-status-content').html('<h4 class="text-success text-center">'+res.msg+'</h4>');
                  $('#msg-sending-form')[0].reset();
              }
              else {
                  $('#msg-status-content').html('<h4 class="text-danger text-center">'+res.msg+'</h4>');
              }
              $('#msg-sending-status-modal').modal({'backdrop':'static'});
              $('#msg-sending-btn').removeAttr("disabled").text('SEND MESSAGE');

          }
      });
  });

  // PreLoader Js
  $('.js-preloader').preloadinator({
    scroll: false,
    animation: 'fadeOut',
    animationDuration: 400
  });

}); // End of use strict