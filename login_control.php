<?php
   include("conn.php");

   $user_id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_EMAIL);
   $user_pw = $_POST['pw'];

   $sql = "SELECT * FROM user_information WHERE user_id = '$user_id' AND user_pw = '$user_pw'";
   $result = mysqli_query($conn, $sql);
   $row = mysqli_fetch_array($result);

   if($result && $row != false){
      session_start();
      $_SESSION['user_id'] = $user_id;
      $_SESSION['login'] = 'login_complete';
      header('Location:index.php');
      die('로그인되었습니다.');
   }else{
      echo "<script>alert('아이디 혹은 비밀번호를 확인해 주세요!');</script>";
      echo "<script>location.replace('login.php');</script>";
   }
?>