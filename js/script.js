function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).bind( 'mousewheel', function (e) { 
  var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
  e.preventDefault(); 
  e.stopPropagation(); 
  $(document.body).stop().animate( { 
       scrollTop : nt 
   } , 200 , 'easeInOutCubic' );  
} )

$('#btn-up').click(function() {
  $('body,html').stop().animate({scrollTop: "0"},700);
});

$(document).scroll(function () { 
 
  if ($(document).scrollTop() > 0) {
    $('header').css('padding-top', `${$('nav').height()}px`);
    $('nav').addClass('fixed');
 } else {
    $('nav').removeClass('fixed');
    $('header').css('padding-top', `0px`);
  }

  if ($(document).scrollTop() >= $(window).height()){
    $('#btn-up').css('bottom', '15px');
  } else {
    $('#btn-up').css('bottom', '-100%');
  }
}) 

document.body.onload = function () { 

  setTimeout(function () { 
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('done') ){
      document.body.style.overflow = 'visible';
      preloader.classList.add('done');
    }
   }, 1000)

 }


$(".header-mobi-icon_menu").click(function () { 
    if ($(this).hasClass("active")) {
      $(".header-mobi_menu").css("right", "-100%");
      $(this).removeClass("active");
    } else {
      $(".header-mobi_menu").css("right", "0%");
      $(this).addClass("active");
    }
 })

$(".header-slider").slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  touchThreshold: 10,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  asNavFor: ".sl-group",
  speed: 500,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$(".header-content").slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  touchThreshold: 10,
  fade: true,
  swipe: false,
});
$(".slider_bg-img").slick({
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
});