var $header = document.getElementById('header'),
   $logo = document.getElementById('logo'),
   $logoImage = document.querySelector('#logo img'),
   $gnb = document.getElementById('gnb'),
   $originLogo = 'resource/img/logo.svg',
   $changeLogo = 'resource/img/logo2.png',
   $window = window,
   $threshold = $header.offsetHeight;

var $threshold2 = 0,
   $tvingS = document.getElementById('tvingSoon'),
   $tvingImage = document.querySelector('#tvingSoon .commingImg');

   function height(x){
      $threshold2 = document.getElementById('tvingSoon').offsetTop - document.getElementById('tvingSoon').offsetHeight;
      var bgSize = 1 + x / 10000;
      console.log(bgSize);
      if(x >= $threshold2 + 300){
         if(bgSize > 1 && bgSize < 6){
            $tvingImage.style.transform = `scale(${bgSize})`;
         }
      }else{
         $tvingImage.style.transform = 'scale(1)';
      }
   }
/*

   문제
   1. tvingSoon 영역에 오면 scale 이 급격하게 커진다.(bgSize가 window.scroll 영향을 계속 받기 떄문)
   2. 아래로 내렸다 올렸을 때 commingImg scale이 1로 돌아오지 않는다.

*/
$window.addEventListener('scroll',function(){
   if($window.pageYOffset > $threshold){
      if(!$header.classList.contains('active')){
         $header.classList.add('active');
         changeImage($changeLogo);
      }
   }else{
      if($header.classList.contains('active')){
         $header.classList.remove('active');
         changeImage($originLogo);
      }
   }//header

   var $windowScroll = $window.pageYOffset;
   
   
   height($windowScroll);
});

function changeImage(x){
   $logoImage.classList.add('hide');
   setTimeout(function(){
      $logoImage.setAttribute('src',x);
      $logoImage.classList.remove('hide');
   },300);//header 
}
   




var $timeBest = document.querySelector('#timeBest .best'),
   $slider = document.querySelector('#timeBest ul'),
   $slide = document.querySelectorAll('#timeBest ul li'),
   $slideHeight = 0;

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