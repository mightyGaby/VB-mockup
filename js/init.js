var video = $(".responsive-video")[0]; // id or class of your <video> tag

function showVideo(){
  // $('.fa-ticket').click(function(){
    $('#highlight-reel').removeClass('hide');
    $('#index-banner, .parallax-container').addClass('dark-overlay');
      if (video.paused) {
          video.play();
      }
    // })
}

function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("standup-reel");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  div.style.display = state == 'hide' ? 'none' : '';
  func = state == 'hide' ? 'pauseVideo' : 'playVideo';
  iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
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
    var container = $(".responsive-video");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $('#highlight-reel, #standup-reel').addClass('hide');
      $('#index-banner, .parallax-container').removeClass('dark-overlay');
      if (!video.paused) {
          video.pause();
      }
      $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');

    }
  });
}


(function($){

  $('#textarea1').val(' ');
  $('#textarea1').trigger('autoresize');

  $(function(){
    // showVideo();
    hideVideo();

    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel-slider').carousel();

    // $('.materialboxed').materialbox();
  }); // end of document ready
})(jQuery); // end of jQuery name space
