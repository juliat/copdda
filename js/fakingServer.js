$(window).load(function(){
  function loadVideoInstructions() {
    $(".vidInstructions").each(function(){
      $(this).load("youtubePlay.html");
    });
  };

  // bind footer links
  $(".prev").on('click',function() {
    ascensorInstance.prev();
  });

  $(".next").on('click',function() {
    ascensorInstance.next();
  });
      

  loadVideoInstructions();

});