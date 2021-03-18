'use strict';
{
  $(function() {
    $('.menu-btn, #mask').on('click', function () {
      $('.menu-btn, #nav, #mask').toggleClass('open');
    });
  });

  $(function () {
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
}
