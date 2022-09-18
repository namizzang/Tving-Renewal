      <?php
         include('conn.php');
         include('list.php');
      ?>
      <footer id="footer">
         <div class="inner">
            <div class="topInfo clear">
               <div class="notice">
                  <h3>공지사항</h3>
                  <div class="noticeBox">
                     <ul>
                        <?php
                           echo $list;
                        ?>
                     </ul>
                  </div>
               </div>
            </div><!--topInfo-->

            <nav class="util">
               <a href="#none">고객센터</a>
               <a href="#none">이용약관</a>
               <a href="#none"><strong>개인정보방침</strong></a>
               <a href="#none">청소년 보호정책</a>
               <a href="#none">법적고지</a>
               <a href="#none">이벤트</a>
               <a href="#none">채용 센터</a>
            </nav><!--util-->

            <div class="sns">
               <a href="#none"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
               <a href="#none"><i class="fa fa-instagram" aria-hidden="true"></i></a>
               <a href="#none"><i class="fa fa-facebook" aria-hidden="true"></i></a>
               <a href="#none"><i class="fa fa-twitter" aria-hidden="true"></i></a>

            </div>

            <div class="copyright">
               <a href=""><strong>Cho Hyun Nam &copy; wiwi154@naver.com</strong></a>
            </div><!--copyright-->
            
         </div>
      </footer><!--footer-->
   </div>
   <script src="js/main.js"></script>
</body>    
</html>