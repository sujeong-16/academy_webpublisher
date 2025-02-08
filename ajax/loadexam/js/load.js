$(function() {
  $('nav a').on('click', function(e){
    e.preventDefault();
    const url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    $('#container').remove();
    $("#content").load(url + ' #container').hide().fadeIn('slow');
  });
});