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
     'whaIsCOPD',
     'noSurvivalBenefit',

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
  });

  //initialize page scrolltop
  var scrollPosition = 0;

  function checkDocLowerBounds() {
    return ($(window).scrollTop() + $(window).height() > $(document).height());
  }

  $(document).keydown(function(event){

    var scrollingFloor = $('.floor');

    if ((event.keyCode === 40) || (event.keyCode === 38)) {

      event.preventDefault();

      console.log("scrollTop before: "+ ($('.floor').scrollTop())) ;
      console.log("scrollPosition before: "+scrollPosition);

      var outOfBounds = checkDocLowerBounds();
      // up
      if ((event.keyCode === 38) && (scrollPosition > 0)) {
        scrollPosition -= 50;
      }
      // down
      else if ((event.keyCode === 40) && !(outOfBounds)) {
        scrollPosition += 50;
      }

      // animate scrolling to new position
      console.log($('.floor').attr('id'));
      scrollingFloor.scrollTop(scrollPosition);
      /*
      animate just beraks stuff...
      scrollingFloor.stop().animate({scrollTop: scrollPosition+"px"}, 500, function() {
        console.log("callback");
      }); */

      console.log("scrollPosition after: " + scrollPosition);
      console.log("scrollTop after: "+ (scrollingFloor.scrollTop())) ;

    } else if (event.keycode === 39 || event.keycode === 37){
      //left or right
      //scroll back to the top
      scrollingFloor.scrollTop(0);
    }
  });
});

