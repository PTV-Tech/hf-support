$(document).ready(function() {

  //Scroll animation  
  AOS.init({});

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();
  $(".modal .modal-body").mCustomScrollbar();

  //Toogle
  $('.faq h2').click(function(){
    $(this).parent().toggleClass('show');
  })

  //Menu bars
  $('.bars').click(function(){
    $('.navigation').toggleClass('toggle');
    $(this).toggleClass('toogle');
  });

  $(".slick-step").slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".article-slick").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });
});

