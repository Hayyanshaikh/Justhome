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
    autoplay: true,
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper(".properties_slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
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