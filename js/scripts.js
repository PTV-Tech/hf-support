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

const modalsInFrame1 = document.getElementsByClassName('frame1');

window.onkeydown = e => {
   let open = false;
   let currentIndex = 0;
   for (let item of modalsInFrame1) {
     currentIndex++
     if (item.classList.contains('show')) {
       open = true;
       break;
     }
   }
   if (!open) {
     return;
   }
  e = e || window.event;
  if (e.keyCode == '37' && currentIndex > 1) {
    $(`#Modal${currentIndex}`).modal('hide');
    $(`#Modal${currentIndex - 1}`).modal('show');
  } else if (e.keyCode == '39' && currentIndex < 4) {
    $(`#Modal${currentIndex}`).modal('hide');
    $(`#Modal${currentIndex + 1}`).modal('show');
  }
}

let touchstartX = 0
let touchendX = 0

function checkDirection(currentIndex) {
  if (touchendX < touchstartX && currentIndex < 4) {
    // alert('swiped left!')
    $(`#Modal${currentIndex}`).modal('hide');
    $(`#Modal${currentIndex + 1}`).modal('show');
  }
  if (touchendX > touchstartX && currentIndex > 1) {
    // alert('swiped right!')
    $(`#Modal${currentIndex}`).modal('hide');
    $(`#Modal${currentIndex - 1}`).modal('show');
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  let open = false;
  let currentIndex = 0;
  for (let item of modalsInFrame1) {
    currentIndex++
    if (item.classList.contains('show')) {
      open = true;
      break;
    }
  }
  if (!open) {
    return;
  }
  checkDirection(currentIndex)
})



