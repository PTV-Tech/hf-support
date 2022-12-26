$(document).ready(function() {

  //Scroll 
  window.scrollTo(0, 10);
  $('.scroll-graphic').scrollSwap();

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();
  $(".modal-text .modal-body").mCustomScrollbar();

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

  //Modal
  $("div[id^='Modal']").each(function(){
  
    var currentModal = $(this);
    
    //click next
    currentModal.find('.btn-next').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='Modal']").nextAll("div[id^='Modal']").first().modal('show'); 
    });
    
    //click prev
    currentModal.find('.btn-prev').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='Modal']").prevAll("div[id^='Modal']").first().modal('show'); 
    });
  
  });  

});

