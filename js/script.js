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

/* nav scroll */

$('header').css('padding-top', `${$('nav').outerHeight()}px`);

$(document).scroll(function () { 
 
  if ($(document).scrollTop() > 0) {
    $('nav').addClass('fixed');
 } else {
    $('nav').removeClass('fixed');
  }

  if ($(document).scrollTop() >= $(window).height()){
    $('#btn-up').css('bottom', '15px');
  } else {
    $('#btn-up').css('bottom', '-100%');
  }
}) 

/* nav scroll end */

/* search start */
const overlay1 = document.querySelector('.overlay-1');
const overlay2 = document.querySelector('.overlay-2');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
overlay1.addEventListener('click', () => {
  search.classList.toggle('active');
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})
search.addEventListener('click', () => {
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})
overlay2.addEventListener('click', (e) => {
  input.value = '';
  input.focus();
  search.classList.remove('searching')
  searchresult.style.display = "none";
})
document.body.addEventListener('click', (e) => {
  if (!search.contains(e.target) && input.value.length === 0) {
    search.classList.remove('active');
    search.classList.remove('searching');
    input.value = '';
  }
})
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    input.blur();
  }
})
input.addEventListener('input', () => {
  if (input.value.length > 0) {
    search.classList.add('searching')
  } else {
    search.classList.remove('searching')
  }
})
input.value = '';
input.blur();
/* search end */

/* categories start */
let i = 1;
let catBtn = document.querySelector('.categories-btn');
if (catBtn != null) {
  catBtn.addEventListener('click', ()=>{
    i++
    console.log(i);
  })
}
/* categories end */

/* btn up start */

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

/* btn up end */


/* preloader start */
document.body.onload = function () { 

  setTimeout(function () { 
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('done') ){
      document.body.style.overflow = 'visible';
      preloader.classList.add('done');
    }
   }, 1000)

 }

/* preloader end */

$(".header-mobi-icon_menu").click(function () { 
    if ($(this).hasClass("active")) {
      $(".header-mobi_menu").css("transform", " translateX(100%)");
      $(this).removeClass("active");
    } else {
      $(".header-mobi_menu").css("transform", " translateX(0%)");
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

$(".posters").slick({
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 919,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 512,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 392,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
})