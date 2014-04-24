$(document).ready(function() {
  var ascensor = $('#pagesWrapper').ascensor(
    {direction: 'x',
     height: '92%',
     jump: true,
     ascensorFloorName: [
     'intro',
     'whoIsThisFor',
     'whatIsCOPD',
     'howTreatmentsWork',
     'whyAChoice',
     'noSurvivalBenefit',
     'benefitsOverview',
     'goingOffOxygen',
     'risksOverview',
     'ventilator',
     'repeatHospitalVisits',
     'kidneyDamage',
     'rejection',
     'frequentMedicineUse',
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

    /* tried simulating click on floor transition with no success */
    /* $("#floor-"+floor.to).click(); */
  });

  Mousetrap.bind('down', function() {
    console.log("down");
    /*
    for whatever reason, doing window.focus and window.scrollBy(0, 100)
    won't activate vertical scrolling here :/
    window.scrollBy(0, 100);
    */

  });

  $("body").focus();

});
