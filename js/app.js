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
     'whatDoesCOPDStandFor',
     'whatIsChronicBronchitis',
     'whatIsEmphysema',

     //Medical Treatment
     'medicalTreatmentTitle',
     'medicalTreatmentProConTable',
     'medicalTreatmentBenefitsList',
     'medicalTreatmentBenefitsPlaylist',
     'medicalTreatmentBenefitsChances',
     'medicalTreatmentRisksList',
     'medicalTreatmentRisksPlaylist',
     'medicalTreatmentRisksChances',
     'medicalTreatmentSummaryTable',

     //Lung Transplant
     'lungTransplantTitle',
     'lungTransplantProConTable',
     'lungTransplantBenefitsList',
     'lungTransplantBenefitsPlaylist',
     'lungTransplantBenefitsChances',
     'lungTransplantRisksList',
     'lungTransplantRisksPlaylist',
     'lungTransplantRisksChances',
     'lungTransplantSummaryTable',

     'howTreatmentsWork',
     'treatmentsCOPDMedicines',
     'treatmentsExerciseForCOPD',
     'treatmentsSurgeriesForCOPD',
     'treatmentsWhyAChoice',
     'treatmentsNoSurvivalBenefit',
     'treatmentsSurvivalNumbers',

     'benefitsComparison1',
     'medicalBenefitControl',
     'medicalBenefitExpense',
     'medicalBenefitDrugs',
     'medicalBenefitCaregiver',

     'benefitsComparison2',
     'transplantBenefitGoingOffOxygen',
     'transplantBenefitGoingOffOxygenChances',
     'transplantBenefitMobility',
     'transplantBenefitMobilityChances',
     'transplantBenefitIndependence',
     'transplantBenefitIndependenceChances',
     'transplantBenefitFamily',
     'transplantBenefitFamilyChances',
     'benefitsComparison3',

     'risksIntro',
     'risksComparison1',
     'medicalRiskInconsistent',
     'medicalRiskShortOfBreath',
     'medicalRiskStillNeedOxygen',
     'medicalRiskFrequentMedicineUse',
     'medicalRiskLimitedIndependence',

     'risksComparison2',
     'transplantRiskNotGetNewLungs',
     'transplantRiskToxicDrugs',
     'transplantRiskToxicDrugsChances',
     'transplantRiskStress',
     'transplantRiskStressChances',
     'transplantRiskComplications',
     'transplantRiskComplicationsRejection',
     'transplantRiskComplicationsRejectionChances',
     'transplantRiskComplicationsVentilator',
     'transplantRiskComplicationsVentilatorChances',
     'transplantRiskComplicationsKidneyDamage',
     'transplantRiskComplicationsKidneyDamageChances',
     'transplantRiskComplicationsFeedingTube',
     'transplantRiskComplicationsFeedingTubeChances',
     'transplantRiskComplicationsLongHospitalStay',
     'transplantRiskComplicationsLongHospitalStayChances',
     'transplantRiskComplicationsChances',
     'transplantRiskFollowup',
     'transplantRiskFollowupChances',
     'transplantRiskLifeChanges',
     'transplantRiskLifeChangesChances',
     'transplantRiskExpense',
     'transplantRiskExpenseChances',
     'risksComparison3',

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

    if (event.keyCode == 40) {
      //down
      event.preventDefault();
      //move down 100px
      $('.floor').stop().animate({ scrollTop: scrollPosition });
      
      scrollPosition += 100;

    } else if (event.keyCode == 38) {
      //up
      event.preventDefault();
      //move up 100px
      $('.floor').stop().animate({ scrollTop: scrollPosition });
      scrollPosition -= 100;

    } else if (event.keycode == 39 || event.keycode == 37){
      //left or right

      //scroll back to the top
      $('.floor').scrollTop(0);

    }
  });
});

