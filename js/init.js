var video = $(".responsive-video")[0]; // id or class of your <video> tag
var audio = document.getElementById("audio");

function toggleInfo(){
    // $('.rep-contact').removeClass('hide');
    $('.intro').addClass('hide');
  console.log('info')
}

function showVideo(){
  $('#highlight-reel').removeClass('hide');
  $('#index-banner, .parallax-container').addClass('dark-overlay');
  if (video.paused) {
      video.play();
  }
  Materialize.toast('Click or tap anywhere to close video reel', 2000, 'toast-style');
  toggleInfo();
}

function audioInit(){
  // $('.fa-ticket').click(function(){
    $('#audio-reel').removeClass('hide');
    $('#audio-reel').addClass('audio-on');
    $('.media-btn .fa-volume-up + p').text('Pause voice reel');
    audio.play();
    // $('#index-banner, .parallax-container').addClass('dark-overlay');
    // })
    Materialize.toast('Click or tap anywhere to close voice reel', 2000, 'toast-style');
    toggleInfo();
}

function playAudio(){
  setTimeout(audioInit, 500);
}

function showStandup() {
    console.log('hello')
    $('#standup-reel').removeClass('hide');
    $('#index-banner, .parallax-container').addClass('dark-overlay');
      toggleYouTube('play');
  Materialize.toast('Click or tap anywhere to close stand-up reel', 2000, 'toast-style');
  toggleInfo();
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
    toggleInfo();
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
      // $('.rep-contact').addClass('hide');
      $('.intro').removeClass('hide');
    }

    if (!audioContainer.is(e.target) // if the target of the click isn't the container...
        && audioContainer.has(e.target).length === 0
        &&  audioContainer.hasClass('audio-on')){
          audio.pause();
          audioContainer.addClass('hide');
          $('.media-btn .fa-volume-up + p').text('Listen to voice reel');
          // $('.rep-contact').addClass('hide');
          $('.intro').removeClass('hide');
    }

  });
}

function clearform()
{
    document.getElementById("name").value=""; //don't forget to set the textbox id
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    document.getElementById("human").value="";

}


(function($){
  $('.nav-wrapper li a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
  });

  if(window.innerWidth < 900 && window.innerWidth > 600){
    $('#credentials .left-tile > div').removeClass('parallax');
  }else {
    $('#credentials .parallax-container.left-tile > div').addClass('parallax');
  }

  $('#message').val(' ');
  $('#message').trigger('autoresize');

  $(function(){
    // showVideo();
    hideVideo();

    $('.materialboxed').materialbox();
    $('.modal-trigger').leanModal();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel-slider').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space
