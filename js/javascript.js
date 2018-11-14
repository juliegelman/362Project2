//jQuery 3.x-style ready event and locally scoped $
$(document).ready(function(){
         $('.slider').bxSlider({

     mode: 'fade',
     captions: true,
     slideWidth: 800,

   responsive: true
     });
});
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
