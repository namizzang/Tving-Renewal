document.addEventListener("DOMContentLoaded",function(){
   var tivingCon = document.querySelector('.tivingCon'),
      slider = document.querySelector('.tivingCon ul'),
      slide = document.querySelectorAll('.tivingCon ul li');
   
   for(var i = 0; i < slide.length; i++){
      slide.style.left = i * 100 + '%';
   }
});