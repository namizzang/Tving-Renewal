var $timeBest = document.querySelector('#timeBest .best'),
   $slider = document.querySelector('#timeBest ul'),
   $slide = document.querySelectorAll('#timeBest ul li'),
   $slideHeight = 0;
``
   for(var i = 0; i < $slide.length; i++){
      $slide[i].style.left = i * 21 + '%';
   }

$(function(){//channel (jQuery ver)
   var $channel = $('#channel'),
      $chaSlider = $channel.find('ul'),
      $chaSlide = $channel.find('li');
   
   $chaSlide.each(function(e){
      $(this).css({left : e * 31 + '%'});
   });
});