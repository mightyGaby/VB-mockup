var video = $(".responsive-video")[0]; // id or class of your <video> tag

function showVideo(){
  $('.fa-video-camera').click(function(){
    $('#highlight-reel').removeClass('hide');
    $('.responsive-video')
      .addClass('vid-init');
    $('#index-banner').addClass('dark-overlay, valign-wrapper');
      if (video.paused) {
          video.play();
      }
  })

  // $(document).click(function(e){
  //   console.log(e.target);
  //     if( $(e.target).is($('.responsive-video')) ){
  //       console.log('true');
  //       $('#highlight-reel').addClass('hide');
  //       $('.responsive-video').removeClass('vid-init');
  //       $('#index-banner').removeClass('dark-overlay');
  //     }
  // })
}

function hideVideo(){
  $(document).mouseup(function (e)
{
    var container = $(".responsive-video");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        // container.hide();
              $('#highlight-reel').addClass('hide');
              $('.responsive-video').removeClass('vid-init');
              $('#index-banner').removeClass('dark-overlay, valign-wrapper');
              if (!video.paused) {
                  video.pause();
              }
    }
});
}

(function($){
  $(function(){
    showVideo();
    hideVideo();

    $('.modal-trigger').leanModal();

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel-slider').carousel();

    // $('.materialboxed').materialbox();
  }); // end of document ready
})(jQuery); // end of jQuery name space
