$(function() {
    $("#nav-bar .compose" ).click(function() {
      $(".new-tweet" ).slideToggle( "fast", function() {
        $('.new-tweet textarea').focus()
      });
    });
})