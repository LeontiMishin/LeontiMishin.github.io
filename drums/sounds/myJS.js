$(function() {
    // 'press button' check
    $(this).keydown(function(event) {
        // create variable with div and data-key
        var key = $(this).find('.key[data-key='+event.which+']');
        // find audio teg with searched data-key
        var audio = $(this).find('audio[data-key='+event.which+']')[0];
        key.toggleClass('playing');
        // check if the teg exists
        if (!audio) return;
        // play sound
        audio.play();
        // drop timer to 0
        audio.currentTime = 0;
    });
    // track event when button is not pressed
    $(this).keyup(function(event) {
        // create variable again
        var key = $(this).find('.key[data-key='+event.which+']');
        // delete class which highlights the button
        key.toggleClass('playing');
    });
});