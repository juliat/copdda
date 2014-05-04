var filesArray = [
    "decisionAidIntro.html",
    "whoIsThisFor.html",
    "whatDoesCOPDStandFor.html",
    "whatIsChronicBronchitis.html",
    "whatIsEmphysema.html",
    "treatmentsHowTreatmentsWork.html",
    "treatmentsCOPDMedicines.html",
    "treatmentsExerciseForCOPD.html",
    "treatmentsSurgeriesForCOPD.html",
    "treatmentsWhyAChoice.html",
    "treatmentsNoSurvivalBenefit.html",
    "treatmentsSurvivalNumbers.html",

    "benefitsComparison.html",
    "medicalBenefitControl.html",
    "medicalBenefitExpense.html",
    "medicalBenefitDrugs.html",
    "medicalBenefitCaregiver.html",
    "benefitsComparison2.html",
    "transplantBenefitGoingOffOxygen.html",
    "transplantBenefitGoingOffOxygenChances.html",
    "transplantBenefitMobility.html",
    "transplantBenefitMobilityChances.html",
    "transplantBenefitIndependence.html",
    "transplantBenefitIndependenceChances.html",
    "transplantBenefitFamily.html",
    "transplantBenefitFamilyChances.html",
    "benefitsComparison.html",

    "risksIntro.html",
    "risksComparison.html",
    "medicalRiskInconsistent.html",
    "medicalRiskShortOfBreath.html",
    "medicalRiskStillNeedOxygen.html",
    "medicalRiskFrequentMedicineUse.html",
    "medicalRiskLimitedIndependence.html",

    "risksComparison.html",
    "transplantRiskNotGetNewLungs.html",
    "transplantRiskToxicDrugs.html",
    "transplantRiskToxicDrugsChances.html",
    "transplantRiskStress.html",
    "transplantRiskStressChances.html",
    "transplantRiskComplications.html",
    "transplantRiskComplicationsRejection.html",
    "transplantRiskComplicationsRejectionChances.html",
    "transplantRiskComplicationsVentilator.html",
    "transplantRiskComplicationsVentilatorChances.html",
    "transplantRiskComplicationsKidneyDamage.html",
    "transplantRiskComplicationsKidneyDamageChances.html",
    "transplantRiskComplicationsFeedingTube.html",
    "transplantRiskComplicationsFeedingTubeChances.html",
    "transplantRiskComplicationsLongHospitalStay.html",
    "transplantRiskComplicationsLongHospitalStayChances.html",
    "transplantRiskComplicationsChances.html",
    "transplantRiskFollowup.html",
    "transplantRiskFollowupChances.html",
    "transplantRiskLifeChanges.html",
    "transplantRiskLifeChangesChances.html",
    "transplantRiskExpense.html",
    "transplantRiskExpenseChances.html",
    "risksComparison.html",

    "valuesIntro.html",
    "valuesQuestion1.html",
    "valuesQuestion2.html",
    "valuesQuestion3.html",
    "valuesEnd.html",
    ]

function loadPages() {
    var numPages = filesArray.length;
    for (var i = 0; i < numPages; i++) {
        var floorDiv = $("#floor-"+(i+1));
        floorDiv.load(filesArray[i]);
    }
    // when files are loaded into pages, add in fakeServer stuff
    setupPages();
}

$(document).ready(function(){
    loadPages();
});