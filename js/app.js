var ascensorInstance;
$(document).ready(function() {
  var ascensor = $('#pagesWrapper').ascensor(
    {direction: 'x',
     height: '94%',
     jump: true,
     ascensorFloorName: [
     'intro',
     'whoIsThisFor',
     'whatDoesCOPDStandFor',
     'whatIsChronicBronchitis',
     'whatIsEmphysema',
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

});
