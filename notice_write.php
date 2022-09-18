<?php
include('header.php');
?>
<div id="notice">
   <div class="inner">
      <div id="notice_inn">
         <h2>TVING 공지사항</h2>
         <form action="notice_insert.php" method="GET" id="notice_form">
            <p class="title">
               <label for="title">제목</label><input type="text" id="title" name="title" required/>
            </p>
            <p class="desc">
               <label for="message"><textarea name="message" id="message" cols="30" rows="10" placeholder="내용을 입력해주세요." required></textarea></label>
            </p>
            <p>
               <input type="submit"/>
            </p>
         </form>
      </div>
   </div>
</div>
<?php
require('footer.php');
?>