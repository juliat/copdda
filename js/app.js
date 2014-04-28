$(document).ready(function() {
  /* handle collapsing of paragraphs */
  function setUpCollapsedParagraphs() {
    var collapsed_links = $('.preview');
    collapsed_links.each(function(){
      $(this).next().hide();
    });
    collapsed_links.bind('click', function(event){
      event.preventDefault();
      $(this).hide();
      $(this).next().show();
    });
  };

  function loadVideoInstructions() {
    $(".vidInstructions").each(function(){
      $(this).load("youtubePlay.html");
    });
  };

  var ascensor = $('#pagesWrapper').ascensor(
    {direction: 'x',
     height: '92%',
     jump: true,
     ascensorFloorName: [
     'intro',
     'whoIsThisFor',
     'whatIsCOPD',
     'whatDoesCOPDStandFor',
     'whatIsChronicBronchitis',
     'whatIsEmphysema',
     'howTreatmentsWork',
     'COPDMedicines',
     'exerciseForCOPD',
     'surgeriesForCOPD',
     'whyAChoice',
     'noSurvivalBenefit',
     'whyMedicalText',
     'medicalBenefitControl',
     'whyTransplant',
     'whyTransplantText',
     'goingOffOxygen',
     'goingOffOxygenChances',
     'whyNotMedical',
     'whyNotMedicalText',
     'medicalRiskInconsistent',
     'medicalRiskShortOfBreath',
     'medicalRiskStillNeedOxygen',
     'medicalRiskLimitedIndependence',
     'whyNotTransplant',
     'whyNotTransplantText',
     'valuesIntro',
     'valuesQuestion1',
     'valuesQuestion2',
     'valuesQuestion3',
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
    // console.log(floor.to);
    $(".progress li:eq("+floor.to+")").addClass("selected");
    setUpCollapsedParagraphs();
    loadVideoInstructions();
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


});
