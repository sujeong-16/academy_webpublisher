$(function() {
  $('nav a').on('click', function(e){  //메뉴를 클릭했을 때
    e.preventDefault();   // a태그 이벤트 막기
    const url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');   // 선택한 a 태그에 current 클래스 붙이기
    $('#container').remove();
    $("#content").load(url + ' #container').hide().fadeIn('normal');
  });

  $('nav a').on('mouseover', function(){
    $('nav a').css("textDecoration", "none");
    $(this).css("textDecoration", 'underline');
  }).on("mouseout", function() {
    $(this).css("textDecoration", "none");
  });
});