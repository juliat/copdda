var ascensorInstance;
$(document).ready(function() {

  var ascensor = $('#pagesWrapper').ascensor(
    {direction: 'x',
     height: '100%',
     jump: true,
     ascensorFloorName: [
     //Intro
     'intro',
     'TOC',
     'whoIsThisFor',
     'whatIsCOPD',
     "whatTreatmentsDo",
     'noSurvivalBenefit',
     'twoOptions',

     //Medical Treatment
     'medicalTreatmentTitle',
     'medicalTreatmentProConTable',
     'medicalTreatmentAdvantagesPlaylist',
     'medicalTreatmentAdvantagesChances',
     'medicalTreatmentDisadvantagesPlaylist',
     'medicalTreatmentDisadvantagesChances',
     'medicalTreatmentSummaryTable',

     //Lung Transplant
     'lungTransplantTitle',
     'lungTransplantProConTable',
     'lungTransplantAdvantagesPlaylist',
     'lungTransplantAdvantagesChances',
     'lungTransplantDisadvantagesPlaylist',
     'lungTransplantDisadvantagesChances',
     'lungTransplantLongTerm',
     'lungTransplantSummaryTable',

     //Values Quiz
     'valuesIntro',
     'valuesQuestion1',
     'valuesQuestion2',
     'valuesQuestion3',
     'valuesEnd',
     ],
    }
  );
  ascensorInstance = $('#pagesWrapper').data('ascensor');

  // to update progress bar
  /* make the progress bar link to different content */
  $(".progress li").click(function(event, index) {
    ascensorInstance.scrollToFloor($(this).index());
  });
  /* docs on the :eq function of jquery https://api.jquery.com/eq/ */
  $(".progress li:eq("+ ascensor.data("current-floor") +")").addClass("selected");

  ascensor.on("scrollStart", function(event, floor){
    $(".progress li").removeClass("selected");
    $(".progress li:eq("+floor.to+")").addClass("selected");

    /* tried simulating click on floor transition with no success */
    /* $("#floor-"+floor.to).click(); */
  });

  //initialize page scrolltop
  var scrollPosition = 0;

  $(document).keydown(function(event){

    if ((event.keyCode === 40) || (event.keyCode === 38)) {

      event.preventDefault();
      //down
      if ((event.keyCode === 40)) {
        scrollPosition += 100;
      }
      // up
      else if ((event.keyCode === 38) && (scrollPosition >0)) {
        scrollPosition -= 100;
      }
      $('.floor').stop().animate({ scrollTop: scrollPosition });

    } else if (event.keyCode === 39 || event.keyCode === 37){
      //left or right
      //scroll back to the top
      $('.floor').scrollTop(0);
    }
  });

  // bind footer links
  $(".prev").on('click',function() {
    ascensorInstance.prev();
  });

  $(".next").on('click',function() {
    ascensorInstance.next();
  });

  // initial value
  var fontSize = 1.375;

  function initFontSize(){
      $("body").css("font-size", fontSize + "em");
  };

  initFontSize();

  $(".fontBigger").click(function(){
      $("body").css("font-size", fontSize + "em");
      fontSize += 0.1;
  });

  $(".fontSmaller").click(function(){
      $("body").css("font-size", fontSize + "em");
      fontSize -= 0.1;
  });

});

