$(function(){
    $('.new-tweet textarea' ).on('input', function() {
        let length = $(this).val().length;
        $(this).parent().find('.counter').text(140-length);
        if (length > 140) {
            $(this).parent().find('.counter').css('color', 'red');
        };
    }); 
});