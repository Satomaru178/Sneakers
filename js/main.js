'use strict';
{
  $(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.menu-btn, #mask').on('click', function () {
      $('.menu-btn, #nav, #mask').toggleClass('open');
    });

    /*=================================================
    スライダー
    ===================================================*/
    $('.slick-slider').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      // autoplay: true,
      // autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '50px',
            slidesToShow: 1
          }
        }
      ]
    });

    /*=================================================
    フェードイン
    ===================================================*/
    $(window).scroll(function (){
      $('.fadein').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight){
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
        }
      });
    });

    /*=================================================
    スムーススクロール
    ===================================================*/
  });
}
