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

var fontSize = 1;
function initFontSize(){
  $("body").css("font-size", fontSize + "em");
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
  initFontSize();

  $(".fontBigger").click(function(){
      $("body").css("font-size", fontSize + "em");
      fontSize += 0.1;
  });

  $(".fontSmaller").click(function(){
      $("body").css("font-size", fontSize + "em");
      fontSize -= 0.1;
  });
};
