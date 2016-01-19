var video = $(".responsive-video")[0]; // id or class of your <video> tag
var audio = document.getElementById("audio");

function showVideo(){
  // $('.fa-ticket').click(function(){
    $('#highlight-reel').removeClass('hide');
    $('#index-banner, .parallax-container').addClass('dark-overlay');
      if (video.paused) {
          video.play();
      }
    // })
}


function audioInit(){
  // $('.fa-ticket').click(function(){
    $('#audio-reel').removeClass('hide');
    $('#audio-reel').addClass('audio-on');
    $('.media-btn .fa-volume-up + p').text('Pause voice reel');
    audio.play();
    // $('#index-banner, .parallax-container').addClass('dark-overlay');
    // })
}

function playAudio(){
  setTimeout(audioInit, 500);
}

function showStandup() {
    console.log('hello')
    $('#standup-reel').removeClass('hide');
    $('#index-banner, .parallax-container').addClass('dark-overlay');
      toggleYouTube('play');
}

function toggleYouTube(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("standup-reel");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    var control;
    // div.style.display = state == 'hide' ? 'none' : '';
    if(state == 'play'){
      control = 'playVideo';
    }else if (state == 'pause') {
      control = 'pauseVideo';
    }
    iframe.postMessage('{"event":"command","func":"' + control + '","args":""}', '*');
}

function hideVideo(){
  $(document).mouseup(function (e){
    var vidContainer = $(".responsive-video");
    var audioContainer = $("#audio-reel");

    if (!vidContainer.is(e.target) // if the target of the click isn't the container...
        && vidContainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $('#highlight-reel, #standup-reel').addClass('hide');
      $('#index-banner, .parallax-container').removeClass('dark-overlay');
      if (!video.paused) {
          video.pause();
      }
      toggleYouTube('pause');
    }

    if (!audioContainer.is(e.target) // if the target of the click isn't the container...
        && audioContainer.has(e.target).length === 0
        &&  audioContainer.hasClass('audio-on')){
          audio.pause();
          audioContainer.addClass('hide');
          $('.media-btn .fa-volume-up + p').text('Listen to voice reel');
    }

  });
}


(function($){

  $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


  $('#textarea1').val(' ');
  $('#textarea1').trigger('autoresize');

  $(function(){
    // showVideo();
    hideVideo();

    $('.materialboxed').materialbox();
    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel-slider').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space
