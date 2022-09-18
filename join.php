<?php include("header.php"); ?>
<div id="joinContainer">
   <div class="inner">
      <div class="join_inn">
         <h2>회원가입</h2>
         <h3>TVING 회원 가입을 간편하게 하세요!</h3>
         <form action="join_control.php" method="post">
            <p><label for="id"><input type="email" id="id" name="id" placeholder="example@example.com" required="required" autocomplete="off" /></label></p>
            <p><label for="pw"><input type="password" id="pw" name="pw" placeholder="비밀번호" required="required" autocomplete="off" /></label></p>
            <p><label for="pw"><input type="password" id="pwch" name="pwch" placeholder="비밀번호 확인" required="required" autocomplete="off" /></label></p>
            
            <p><input type="submit" id="subm" value="회원가입" /></p>
         </form>
      </div>
   </div>
</div>
<?php include("footer.php") ?>