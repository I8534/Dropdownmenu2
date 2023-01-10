$(function () {
  $(".sub").css({display: "none"});
  
  $(".main-menu li, .drop-down").hover(function () {
    // hover시 서브 메뉴가 보이게
    $(".sub").stop().slideDown(500);
  }, function() {
    $(".sub").stop().slideUp(500);
    // hover되지 않았을 경우 서브 메뉴가 보이게
  });

  $(".drop-down > li").hover(function () {
    let i = $(this).index();
    $(".main-menu li").find("a").eq(i).addClass("on");
  }, function() {
    let i = $(this).index();
    $(".main-menu li").find("a").eq(i).removeClass("on");
  })
})