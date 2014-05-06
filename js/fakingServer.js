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
});

$(document).ready(function(){

    setupPages();

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
