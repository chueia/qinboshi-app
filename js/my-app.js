var myApp = new Framework7(); 

 // Init slider and store its instance in mySwiper variable
 var mySwiper = myApp.swiper('.swiper-container', {
   pagination:'.swiper-pagination'
 });

//标签页切换JS
  $(".toolbar .tab-link").on('touchstart', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var a = $(this).attr('class').replace(/[^0-9]/ig, "");//取得下标数字
    var b = ".tab-" + a;//下标与.tab-组成字符串 选择相应元素
    $(b).addClass('show').siblings().removeClass('show');
    
});
