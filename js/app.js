$(document).ready(function() {

  function toNextPage() {
    var href = $('.next-page').attr('href');
    window.location = href;
  }

  Mousetrap.bind('right', function() {
    toNextPage();
    /*
    for whatever reason, doing window.focus and window.scrollBy(0, 100)
    won't activate vertical scrolling here :/
    window.scrollBy(0, 100);
    */

  });

});
