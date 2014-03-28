$(document).ready(function() {
  var ascensor = $('#pagesWrapper').ascensor(
    {direction: 'x',
     height: '90%',
     ascensorFloorName: [
     'intro',
     'whoIsThisFor',
     'whatIsCOPD',
     'treatingCOPD',
     'whyDoIHaveAChoice',
     'floor6',
     'floor7',
     'floor8',
     'floor9',
     'floor10',
     'floor11',
     'floor12', 'floor13'
     ],
    }
  );
  var ascensorInstance = $('#pagesWrapper').data('ascensor');

  // for links
  $(".prev").click(function() {
    ascensorInstance.prev();
  });

  $(".next").click(function() {
    ascensorInstance.next();
  });

  // to update progress bar
  /* make the progress bar link to different content */
  $(".progress li").click(function(event, index) {
    ascensorInstance.scrollToFloor($(this).index());
  });


  /* docs on the :eq function of jquery https://api.jquery.com/eq/ */
  $(".progress li:eq("+ ascensor.data("current-floor") +")").addClass("selected");

  ascensor.on("scrollStart", function(event, floor){
    $(".progress li").removeClass("selected");
    console.log(floor.to);
    $(".progress li:eq("+floor.to+")").addClass("selected");
  });

});
