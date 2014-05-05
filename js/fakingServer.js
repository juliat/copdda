$(window).load(function(){
  function loadVideoInstructions() {
    $(".vidInstructions").each(function(){
      $(this).load("youtubePlay.html");
    });
  };

  function addFooter() {
    $('.floor').each(function(){
      $(this).append("<div class='pageFooter'><a class='prev'>Click here to go to previous page</a><a class='next'>Click here to go to next page</a></div>");
    });
  };

function setupPages() {
  addFooter();
  loadVideoInstructions();

  // bind footer links
  $(".prev").on('click',function() {
    ascensorInstance.prev();
  });

  $(".next").on('click',function() {
    ascensorInstance.next();
  });
}

});

$(document).ready(function(){
    var fontSize = 1;

    function initFontSize(){
        $("body p, body ol, body ul, body li").css("font-size", fontSize + "em");
    };

    initFontSize();

    $(".fontBigger").click(function(){
        $("body p, body ol, body ul, body li").css("font-size", fontSize + "em");
        fontSize += 0.1;
    });

    $(".fontSmaller").click(function(){
        $("body p, body ol, body ul, body li").css("font-size", fontSize + "em");
        fontSize -= 0.1;
    });

});
