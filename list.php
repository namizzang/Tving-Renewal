<?php
   $sql = "SELECT * FROM notice";
   $result = mysqli_query($conn, $sql);
   $list = '';
   while($row = mysqli_fetch_array($result)){
      if(isset($notice_list)){
         $list = $list . "<li><span>{$row['numner']} . </span><a href=\"notice_view.php?number={$row['numner']}\">{$row['title']}</a></li>";
      }else{
         $list = $list . "<li><span>{$row['numner']} . </span><a href=\"notice_list.php\">{$row['title']}</a></li>";
      }
   }
?>