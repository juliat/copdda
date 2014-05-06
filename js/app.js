var ascensorInstance;
$(document).ready(function() {

  var ascensor = $('#pagesWrapper').ascensor(
    {direction: 'x',
     height: '96%',
     jump: true,
     ascensorFloorName: [
     //Intro
     'intro',
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

    if ((event.keyCode == 40) || (event.keyCode == 38)) {

      event.preventDefault();
      //down
      if (event.keyCode == 40) {
        //move down 100px
        scrollPosition += 100;
      }
      else {
        //up
        //move up 100px
        scrollPosition -= 100;
      }
      $('.floor').stop().animate({ scrollTop: scrollPosition });

    } else if (event.keycode == 39 || event.keycode == 37){
      //left or right

      //scroll back to the top
      $('.floor').scrollTop(0);

    }
  });
});

