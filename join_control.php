<?php
   include("conn.php");

   $user_id = $_POST['id'];
   $user_pw = $_POST['pw'];
   $user_pw_check = $_POST['pwch'];
   $date = date("y-m-d", time());

   if($user_pw !== $user_pw_check){
      echo "<script>alert('비밀번호가 잘못 입력 되었습니다.')</script>";
      echo "<script>location.replace('join.php');</script>";
      exit;
   }else{
      if(!empty($user_id) && !empty($user_pw) && !empty($user_pw_check)){
         $sql = "INSERT INTO user_information(user_id, user_pw, date) VALUES('$user_id','$user_pw','$date')";
         $result = mysqli_query($conn,$sql);
      }
   }
   if($result){
      header("Location:login.php");
   }else{
      header("Location:join.php");
   }
?>