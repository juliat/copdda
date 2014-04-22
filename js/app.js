$(document).ready(function() {
  var ascensor = $('#pagesWrapper').ascensor(
    {direction: 'x',
     height: '92%',
     ascensorFloorName: [
     'intro',
     'whoIsThisFor',
     'whatIsCOPD',
     'howTreatmentsWork',
     'whyAChoice',
     'noSurvivalBenefit',
     'treatingCOPD',
     'benefitsOverview',
     'tbenefit1',
     'tbenefit2',
     'tbenefit3',
     'mbenefit1',
     'mbenefit2',
     'mbenefit3',
     'risksoverview',
     'mmrisk',
     'mrisk1',
     'mrisk2',
     'mrisk3',
     'trisk1',
     'trisk2',
     'trisk3',
     'valuequiz',
     'value1',
     'value2',
     'value3',
     'scale',
     ],
    }
  );
  var ascensorInstance = $('#pagesWrapper').data('ascensor');

  // for links
  $(".prev").click(function() {
    ascensorInstance.prev();
  });

  $(".next").click(function() {
    debugger;
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
