<?php
   ob_start();
   header('content-type:text/html; charset=utf-8');
   $conn = mysqli_connect("localhost","root","whgusska153","login");

   if(!$conn){
      echo mysqli_connect_error();
      exit;
   }
?>