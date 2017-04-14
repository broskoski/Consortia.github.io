// Initialise FlexSlider for Carousels
$(document).ready(function() {
    $('.flexslider').flexslider({
      slideshow: true,
      prevText: "<",
      nextText: ">",
      controlNav: false,
      animation: "slide",
      animationLoop: true,
      pauseOnHover: true,
      useCSS: false
      //start: function(slider) {
        //$('.slides li img').click(function(event){
          //event.preventDefault();
          //slider.flexAnimate(slider.getTarget("next"));
        //});
      //}

    });
    $(window).trigger('resize');
});
