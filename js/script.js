$(function() {
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

  var forms = $('.needs-validation');
  forms.each(function() {
    $(this).on('submit', function(event) {
      event.preventDefault();
      if (this.checkValidity() === false) {
        event.stopPropagation();
      }
      $(this).addClass('was-validated');
    });
  });

  var swiper = new Swiper('.countries_slider', {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 800,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      575: {
        loop: false,
        centeredSlides: false
      }
    }
  });

  var swiper = new Swiper(".properties_slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 800,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      575: {
        loop: false,
        centeredSlides: false
      }
    }
  });

  var swiper = new Swiper('.testimonial_slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.companies-slider', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  $(".properties_filter_btn").click(function() {
    // Toggle the slide of the properties_filter_detail
    $(this).next(".properties_filter_detail").slideToggle();
    
    // Toggle the caret icon direction
    $(this).find("i").toggleClass("ph-caret-down ph-caret-up");
  });

});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? $("#menu").hide() : $("#menu").show();

  setTimeout(() => {
    $("#menu").show();
  }, 100);
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-end shows') : menu.removeClass('offcanvas offcanvas-start');
}