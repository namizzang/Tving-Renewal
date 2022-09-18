<?php
   include('header.php');
   $notice_list = 0;
   include('list.php');
?>

<div id="noticeList">
   <div class="inner">
      <div class="noticeList_inn">
         <h2>공지사항</h2>
         <p class="sub_title">데이터베이스 활용을 하기 위해 만든 게시판입니다</p>
         <ul>
            <?php
               echo $list
            ?>
         </ul>
      </div>
   </div>
</div>

<?php
include('footer.php');
?>