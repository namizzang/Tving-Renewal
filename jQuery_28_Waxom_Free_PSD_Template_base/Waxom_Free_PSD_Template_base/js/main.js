$(document).ready(function () {
   // recent post slideshow
   $('.posts_list').bxSlider({
      minSlides: 1,
      maxSlides: 3,
      moveSlides: 1,
      slideWidth: 370,
      slideMargin: 30,
      pager: false,
      nextSelector: '.recent_posts .controls .next',
      prevSelector: '.recent_posts .controls .prev'
   });
   // mobile 메뉴
   $(".toggle").click(function () {
      $(".main-menu").slideToggle();
   });
   // 사이즈 변경시 메뉴
   $(window).resize(function () {
      if ($(window).width() > 768) {
         $(".main-menu").show();
      } else {
         $(".main-menu").hide();
      }
   });

   // 상단 메뉴 고정

   var $header = $('header');
   var $services = $('.services');
   var $counters = $('.counters');
   var $countersData = $counters.find('h3');

   var $countersExcuted = false;
   var $serviceExcuted = false;


   $(window).scroll(function(){
      var $offset = 300;

      if($(this).scrollTop() > 0){
         $header.addClass('sticky');
      }else{
         $header.removeClass('sticky');
      }

      // service-item 나타나기
      var $serviceThreshold = $services.offset().top - $offset;
      if(!$serviceExcuted){
         if($(this).scrollTop() > $serviceThreshold){
            $services.addClass('active');
            $serviceExcuted = true;
         }
      }

      // number-animation
      var $countersThreshold = $counters.offset().top -$offset;
      
      if(!$countersExcuted){
         if($(this).scrollTop() > $countersThreshold){
            $countersData.each(function(){
               var $current = $(this);
               var $target = $current.attr('data-rate');
               // animate .progress, rate
               $({rate:0}).animate({rate:$target},{
                  duration: 2500,
                  progress:function(){
                     var $now = this.rate;
                     $current.text(Math.ceil($now));
                  }
               });//animate
            });//each
            $countersExcuted = true;
         }
      }
      
   });//window.scroll
   var $currentUrl = $('iframe').attr('src');
   $('.video .icon').click(function(e){
      e.preventDefault();
      $('#overlay').addClass('visible');
      var $currentUrl = $('iframe').attr('src');
      var $newStr = '?autoplay=1';
      var $newUrl = $currentUrl.concat($newStr);
      $('iframe').attr('src',$newUrl);
   });
   $('.video .close').click(function(e){
      e.preventDefault();
      $('#overlay').removeClass('visible');

      var $currentUrl = $('iframe').attr('src');
      var $newUrl2 = $currentUrl.replace('?autoplay=1','');
      $('iframe').attr('src',$newUrl2);
   });
   
});