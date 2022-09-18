<?php 
   include('header.php');
?>

<div id="login">
   <div class="inner">
      <div class="login_inn">
         <h2>TVING 로그인</h2>
         <form action="login_control.php" method="post">
            <p><label for="id"><input type="text" id="id" name="id" placeholder="아이디" required="required" autocomplete="off"/></label></p>
            <p><label for="pw"><input type="password" id="pw" name="pw" placeholder="비밀번호" required="required" autocomplete="off"/></label></p>
            <p><input type="submit" id="subm" value="로그인"/></p>
         </form>
         <p class="joinArea"><span>아직 계정이 없으신가요?</span><a href="join.php">회원가입하기</a></p>
      </div>
   </div>
</div>
<!-- login -->

<?php include('footer.php');?>