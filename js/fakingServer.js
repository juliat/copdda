$(window).load(function(){

  function setupPages() {
    // bind footer links
    $(".prev").on('click',function() {
      ascensorInstance.prev();
    });

    $(".next").on('click',function() {
      ascensorInstance.next();
    });
  }

  setupPages();
});

$(document).ready(function(){
    var fontSize = 1;

    function initFontSize(){
        $("body p, body ol, body ul, body li").css("font-size", fontSize + "em");
    };

    initFontSize();

    $(".fontBigger").click(function(){
        fontSize += 0.1;
        $("body").css("font-size", fontSize + "em");
    });

    $(".fontSmaller").click(function(){
        fontSize -= 0.1;
        $("body").css("font-size", fontSize + "em");
    });


});
