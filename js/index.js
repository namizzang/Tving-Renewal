var $timeBest = document.querySelector('#timeBest .best'),
   $slider = document.querySelector('#timeBest ul'),
   $slide = document.querySelectorAll('#timeBest ul li'),
   $slideHeight = 0;

for(var i = 0; i < $slide.length; i++){
   $slide[i].style.left = i * 21 + '%';
}

var $thresholdTving = 0,
   $tvingS = document.getElementById('tvingSoon'),
   $tvingImage = document.querySelector('#tvingSoon .commingImg');
// var $threshold = 30 + 'px',
//    $changeLogo = 0 + '%';


function height(x){
   $thresholdTving = document.getElementById('tvingSoon').offsetTop;
   if(x > $thresholdTving + 300){
      var $bgSize = 1 + x / 10000;
      var $opacity = $tvingS.clientHeight ;
      $tvingImage.style.transform = `scale(${$bgSize})`;
   }else{
      $tvingImage.style.transform = 'scale(1)';
   }
}

window.addEventListener('scroll',function(){
   var $windowScroll = $window.pageYOffset;
   height($windowScroll);
});

$(function(){//jQuery
   var $channel = $('#channel'),
      $chaSlider = $channel.find('ul'),
      $chaSlide = $channel.find('li');
   
   $chaSlide.each(function(e){
      $(this).css({left : e * 31 + '%'});
   });

   //user-Num
   var $using = $('#using'),
      $usingNum = $using.find('.usingNum');
   var $excuted = false;
         
   $(window).scroll(function(){
      var $usingThreshold = $using.offset().top - 800;
      // console.log($excuted);
      if(!$excuted){
         if($(this).scrollTop() > $usingThreshold){
            $usingNum.each(function(){
               var $current = $(this);
               var $number = $current.attr('data-num');
   
               $({rate:0}).animate({rate:$number},{
                  duration:4000,
                  progress:function(){
                     var $now = this.rate;
                     $current.text(Math.ceil($now));
                  }
               });//animate
            });//each
            $excuted = true;
         }
      }
   });//window

   

   $('#section1 li').click(function(){
      $('.modalPop').addClass('visible');
   });
   $('.modalPop .close').click(function(){
      $('.modalPop').removeClass('visible');
   });
});//jQuery
