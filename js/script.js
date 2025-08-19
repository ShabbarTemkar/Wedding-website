(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

var globalVariables = {
    isMusicPlaying : false,
    initClick : false
}


$(musicPlay).on('click', function(e){
    
    if (globalVariables.isMusicPlaying) {
        document.getElementById("my_audio").pause();
        globalVariables.isMusicPlaying = false
        window.navigator.vibrate([50])
        document.getElementById('iconSoundImg').src = 'img/sound-mute.svg'
    } else {
        document.getElementById("my_audio").play();
        globalVariables.isMusicPlaying = true
        window.navigator.vibrate([50])
        document.getElementById('iconSoundImg').src = 'img/sound.svg'
    }
});

$(document).ready(function() {
    $(document).on('click', function () {
        if (!globalVariables.initClick) {
            document.getElementById("my_audio").play();
            globalVariables.isMusicPlaying = true
            document.getElementById('iconSoundImg').src = 'img/sound.svg'
            globalVariables.initClick = true
        }
    })
});

setTimeout(function () {
    document.getElementById('tooltip').style.display = 'none'
}, 5000)


var styles = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 4px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var weddingDate = new Date("November 1, 2025 18:00:00").getTime();

var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = weddingDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("time")) {
        document.getElementById("time").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        if (document.getElementById("time")) {
            document.getElementById("time").innerHTML = "Today is the Wedding Day!";
        }
        document.title = "We finally got hitched";
    }
}, 1000);
