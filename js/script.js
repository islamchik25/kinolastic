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

