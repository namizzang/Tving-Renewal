var $header = document.getElementById('header'),
   $logo = document.getElementById('logo'),
   $logoImage = document.querySelector('#logo img'),
   $gnb = document.getElementById('gnb'),
   $originLogo = 'resource/img/logo.svg',
   $changeLogo = 'resource/img/logo2.png',
   $window = window,
   $threshold = $header.offsetHeight;

var $thresholdTving = 0,
   $tvingS = document.getElementById('tvingSoon'),
   $tvingImage = document.querySelector('#tvingSoon .commingImg');
// var $threshold = 30 + 'px',
//    $changeLogo = 0 + '%';
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
});

function changeImage(x){
   $logoImage.classList.add('hide');
   setTimeout(function(){
      $logoImage.setAttribute('src',x);
      $logoImage.classList.remove('hide');
   },300);//header 
}

var $noticeSlider = document.querySelector('#footer .noticeBox ul'), 
   $noticeSlide = document.querySelectorAll('#footer .noticeBox ul li'),
   $currentIndex = 0,
   $auto = undefined;
var $noticeBox = document.querySelector('#footer .notice');

function moving(x){
   $noticeSlider.style.top = -40 * x + 'px';
   $currentIndex = x;
}
startSlide();
function startSlide(){
   var $auto = setInterval(function(){
      moving($currentIndex + 1);
      var $nextIndex = $currentIndex % ($noticeSlide.length);
      moving($nextIndex);
   },4000)
}

$noticeBox.addEventListener('mouseenter',function(){
   clearInterval($auto);
});
$noticeBox.addEventListener('mouseleave',function(){
   startSlide();
});



