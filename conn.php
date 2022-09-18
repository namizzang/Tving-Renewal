<?php
   ob_start();
   header('content-type:text/html; charset=utf-8');
   $conn = mysqli_connect("localhost","dotsisi154","whgusska153!","dotsisi154");

   if(!$conn){
      echo mysqli_connect_error();
      exit;
   }
?>