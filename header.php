<?php
   include('conn.php');
   if(!isset($_SESSION['user_id'])){
      session_cache_expire(30);
      session_start();
   }
?>
<!DOCTYPE html>
<html lang="ko">

<head>
   <meta charset="UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" minimum="1.0" />
   <link rel="stylesheet" href="css/reset.css">
   <link rel="stylesheet" href="css/main.css">
   <link rel="stylesheet" href="css/login.css">
   <link rel="stylesheet" href="css/join.css">
   <link rel="stylesheet" href="css/notice.css">
   <link rel="stylesheet" href="plugin/slick-theme.css">
   <link rel="stylesheet" href="plugin/slick.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
   <script src="plugin/slick.min.js"></script>
   <!-- test -->
</head>

<body>
   <div id="wrap">
      <header id="header">
         
         <div class="inner">
            <h1 id="logo">
               <a href="index.php" data-image="resource/img">
                  <img src="resource/img/logo.svg" alt="티빙" />
               </a>
            </h1>
            <ul id="gnb">
               <?php
                  if(isset($_SESSION['user_id'])){
                     echo "<li><a href='user_information.php'>{$_SESSION['user_id']}님</a></li>";
                  }
               ?>
               <li><a href="#">실시간</a></li>
               <li><a href="#">TV프로그램</a></li>
               <li><a href="#">영화</a></li>
               <?php
                  if(!isset($_SESSION['user_id'])){
                     echo "<li><a href='login.php'>로그인</a></li>";
                  }else{
                     echo "<li><a href='logout.php'>로그아웃</a></li>";
                  }
               ?>
            </ul>
         </div>
      </header>
      <!--header-->