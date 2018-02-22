
// Animations

// About Animation
const about = document.getElementById('about');
let aboutBlock = document.querySelectorAll('.about-content-block');

function animateIn(e) {
  if (window.scrollY > about.offsetTop - 200) {
      if (window.innerWidth > 960) {
      aboutBlock.forEach(block => {
        block.classList.add('animated', 'fadeInLeft');
      });
    }
  }
}

document.addEventListener('scroll', animateIn);

// Services Animation
const serviceSection = document.querySelector('#services');
let serviceCards = document.querySelectorAll('.services-list li');

function animateServices(e) {
  if (window.scrollY > serviceSection.offsetTop - 200) {
    $('.services-list li').each(function(i) {
      setTimeout(function() {
        $('.services-list li').eq(i).addClass('animated flipInX');
      }, 175 * i);
    });
  }
}

document.addEventListener('scroll', animateServices);

// Ekko lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            loop:false,
            autoplay: false
        },
        600:{
            items:4,
            nav:false,
            loop:false,
            autoplay: false
        },
        1000:{
            items:6,
            nav:false,
            loop:false
        }
    }
});

// Smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
