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
    $('.media-btn p').text('Hide audio reel');
    audio.play();
    // $('#index-banner, .parallax-container').addClass('dark-overlay');
    // })
}

function playAudio(){
  setTimeout(audioInit, 500);
}

function showStandup() {
  // $('#standup-reel').click(function(){
    console.log('hello')
    $('#standup-reel').removeClass('hide');
    $('#index-banner, .parallax-container').addClass('dark-overlay');
    // toggleVideo('hide');
  // })
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
      $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }

    if (!audioContainer.is(e.target) // if the target of the click isn't the container...
        && audioContainer.has(e.target).length === 0
        &&  audioContainer.hasClass('audio-on')){
          audio.pause();
          audioContainer.addClass('hide');
          $('.media-btn p').text('Play audio reel');
    }

  });
}


(function($){

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
