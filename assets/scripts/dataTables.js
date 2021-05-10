// Table that provides a board initial volume in relation to a specific weight range and ability
function weightAbilityRel() {
    let weightInput = $('#weightInput').val();
    let abilityInput = $('#abilityInput').val();

    function WeightAbilityRelValues(weightData, abilityData) {

        switch (true) {
            case (weightData === "w35_39_under" && abilityData === "advancedPlus"):
                this.weiAbFactor = 15.05;
                break;
            case (weightData === "w35_39_under" && abilityData === "advanced"):
                this.weiAbFactor = 15.75;
                break;
            case (weightData === "w35_39_under" && abilityData === "inter_adv"):
                this.weiAbFactor = 16.80;
                break;
            case (weightData === "w35_39_under" && abilityData === "intermediate"):
                this.weiAbFactor = 21.00;
                break;
            case (weightData === "w35_39_under" && abilityData === "beginner"):
                this.weiAbFactor = 25.90;
                break;


            case (weightData === "w40_44" && abilityData === "advancedPlus"):
                this.weiAbFactor = 16.40;
                break;
            case (weightData === "w40_44" && abilityData === "advanced"):
                this.weiAbFactor = 17.20;
                break;
            case (weightData === "w40_44" && abilityData === "inter_adv"):
                this.weiAbFactor = 18.80;
                break;
            case (weightData === "w40_44" && abilityData === "intermediate"):
                this.weiAbFactor = 23.60;
                break;
            case (weightData === "w40_44" && abilityData === "beginner"):
                this.weiAbFactor = 29.20;
                break;


            case (weightData === "w45_49" && abilityData === "advancedPlus"):
                this.weiAbFactor = 18.00;
                break;
            case (weightData === "w45_49" && abilityData === "advanced"):
                this.weiAbFactor = 18.90;
                break;
            case (weightData === "w45_49" && abilityData === "inter_adv"):
                this.weiAbFactor = 20.70;
                break;
            case (weightData === "w45_49" && abilityData === "intermediate"):
                this.weiAbFactor = 26.10;
                break;
            case (weightData === "w45_49" && abilityData === "beginner"):
                this.weiAbFactor = 32.40;
                break;


            case (weightData === "w50_54" && abilityData === "advancedPlus"):
                this.weiAbFactor = 19.00;
                break;
            case (weightData === "w50_54" && abilityData === "advanced"):
                this.weiAbFactor = 20.50;
                break;
            case (weightData === "w50_54" && abilityData === "inter_adv"):
                this.weiAbFactor = 22.50;
                break;
            case (weightData === "w50_54" && abilityData === "intermediate"):
                this.weiAbFactor = 28.50;
                break;
            case (weightData === "w50_54" && abilityData === "beginner"):
                this.weiAbFactor = 35.50;
                break;


            case (weightData === "w55_59" && abilityData === "advancedPlus"):
                this.weiAbFactor = 19.80;
                break;
            case (weightData === "w55_59" && abilityData === "advanced"):
                this.weiAbFactor = 21.45;
                break;
            case (weightData === "w55_59" && abilityData === "inter_adv"):
                this.weiAbFactor = 23.65;
                break;
            case (weightData === "w55_59" && abilityData === "intermediate"):
                this.weiAbFactor = 30.25;
                break;
            case (weightData === "w55_59" && abilityData === "beginner"):
                this.weiAbFactor = 37.95;
                break;


            case (weightData === "w60_64" && abilityData === "advancedPlus"):
                this.weiAbFactor = 21.00;
                break;
            case (weightData === "w60_64" && abilityData === "advanced"):
                this.weiAbFactor = 22.80;
                break;
            case (weightData === "w60_64" && abilityData === "inter_adv"):
                this.weiAbFactor = 25.20;
                break;
            case (weightData === "w60_64" && abilityData === "intermediate"):
                this.weiAbFactor = 32.40;
                break;
            case (weightData === "w60_64" && abilityData === "beginner"):
                this.weiAbFactor = 40.80;
                break;


            case (weightData === "w65_69" && abilityData === "advancedPlus"):
                this.weiAbFactor = 22.75;
                break;
            case (weightData === "w65_69" && abilityData === "advanced"):
                this.weiAbFactor = 24.70;
                break;
            case (weightData === "w65_69" && abilityData === "inter_adv"):
                this.weiAbFactor = 27.30;
                break;
            case (weightData === "w65_69" && abilityData === "intermediate"):
                this.weiAbFactor = 35.10;
                break;
            case (weightData === "w65_69" && abilityData === "beginner"):
                this.weiAbFactor = 44.20;
                break;


            case (weightData === "w70_74" && abilityData === "advancedPlus"):
                this.weiAbFactor = 24.50;
                break;
            case (weightData === "w70_74" && abilityData === "advanced"):
                this.weiAbFactor = 26.60;
                break;
            case (weightData === "w70_74" && abilityData === "inter_adv"):
                this.weiAbFactor = 29.40;
                break;
            case (weightData === "w70_74" && abilityData === "intermediate"):
                this.weiAbFactor = 37.80;
                break;
            case (weightData === "w70_74" && abilityData === "beginner"):
                this.weiAbFactor = 47.60;
                break;


            case (weightData === "w75_79" && abilityData === "advancedPlus"):
                this.weiAbFactor = 26.25;
                break;
            case (weightData === "w75_79" && abilityData === "advanced"):
                this.weiAbFactor = 28.50;
                break;
            case (weightData === "w75_79" && abilityData === "inter_adv"):
                this.weiAbFactor = 31.50;
                break;
            case (weightData === "w75_79" && abilityData === "intermediate"):
                this.weiAbFactor = 40.50;
                break;
            case (weightData === "w75_79" && abilityData === "beginner"):
                this.weiAbFactor = 51.00;
                break;


            case (weightData === "w80_84" && abilityData === "advancedPlus"):
                this.weiAbFactor = 28.00;
                break;
            case (weightData === "w80_84" && abilityData === "advanced"):
                this.weiAbFactor = 30.40;
                break;
            case (weightData === "w80_84" && abilityData === "inter_adv"):
                this.weiAbFactor = 33.60;
                break;
            case (weightData === "w80_84" && abilityData === "intermediate"):
                this.weiAbFactor = 43.20;
                break;
            case (weightData === "w80_84" && abilityData === "beginner"):
                this.weiAbFactor = 54.40;
                break;


            case (weightData === "w85_89" && abilityData === "advancedPlus"):
                this.weiAbFactor = 29.75;
                break;
            case (weightData === "w85_89" && abilityData === "advanced"):
                this.weiAbFactor = 32.30;
                break;
            case (weightData === "w85_89" && abilityData === "inter_adv"):
                this.weiAbFactor = 35.70;
                break;
            case (weightData === "w85_89" && abilityData === "intermediate"):
                this.weiAbFactor = 45.90;
                break;
            case (weightData === "w85_89" && abilityData === "beginner"):
                this.weiAbFactor = 57.80;
                break;


            case (weightData === "w90_94" && abilityData === "advancedPlus"):
                this.weiAbFactor = 31.50;
                break;
            case (weightData === "w90_94" && abilityData === "advanced"):
                this.weiAbFactor = 34.20;
                break;
            case (weightData === "w90_94" && abilityData === "inter_adv"):
                this.weiAbFactor = 37.80;
                break;
            case (weightData === "w90_94" && abilityData === "intermediate"):
                this.weiAbFactor = 48.60;
                break;
            case (weightData === "w90_94" && abilityData === "beginner"):
                this.weiAbFactor = 61.20;
                break;


            case (weightData === "w95_99" && abilityData === "advancedPlus"):
                this.weiAbFactor = 33.25;
                break;
            case (weightData === "w95_99" && abilityData === "advanced"):
                this.weiAbFactor = 36.10;
                break;
            case (weightData === "w95_99" && abilityData === "inter_adv"):
                this.weiAbFactor = 39.90;
                break;
            case (weightData === "w95_99" && abilityData === "intermediate"):
                this.weiAbFactor = 51.30;
                break;
            case (weightData === "w95_99" && abilityData === "beginner"):
                this.weiAbFactor = 64.60;
                break;


            case (weightData === "w100_104" && abilityData === "advancedPlus"):
                this.weiAbFactor = 35.00;
                break;
            case (weightData === "w100_104" && abilityData === "advanced"):
                this.weiAbFactor = 38.00;
                break;
            case (weightData === "w100_104" && abilityData === "inter_adv"):
                this.weiAbFactor = 42.00;
                break;
            case (weightData === "w100_104" && abilityData === "intermediate"):
                this.weiAbFactor = 54.00;
                break;
            case (weightData === "w100_104" && abilityData === "beginner"):
                this.weiAbFactor = 68.00;
                break;


            case (weightData === "w105_109" && abilityData === "advancedPlus"):
                this.weiAbFactor = 36.75;
                break;
            case (weightData === "w105_109" && abilityData === "advanced"):
                this.weiAbFactor = 39.90;
                break;
            case (weightData === "w105_109" && abilityData === "inter_adv"):
                this.weiAbFactor = 44.10;
                break;
            case (weightData === "w105_109" && abilityData === "intermediate"):
                this.weiAbFactor = 56.70;
                break;
            case (weightData === "w105_109" && abilityData === "beginner"):
                this.weiAbFactor = 71.40;
                break;


            case (weightData === "w110_more" && abilityData === "advancedPlus"):
                this.weiAbFactor = 38.50;
                break;
            case (weightData === "w110_more" && abilityData === "advanced"):
                this.weiAbFactor = 41.80;
                break;
            case (weightData === "w110_more" && abilityData === "inter_adv"):
                this.weiAbFactor = 46.20;
                break;
            case (weightData === "w110_more" && abilityData === "intermediate"):
                this.weiAbFactor = 59.40;
                break;
            case (weightData === "w110_more" && abilityData === "beginner"):
                this.weiAbFactor = 74.80;
                break;
        };

    };

    return weightAbility = new WeightAbilityRelValues(weightInput, abilityInput);
};

// Table that provides a factor to be added to the initial volume in relation to a specific age range
function ageFactorCalc() {
    let ageInput = $('#ageInput').val();

    function AgeFactorValues(ageData) {

        switch (ageData) {
            case "a0_To_30":
                this.ageFactor = 1;
                break;
            case "a31_To_50":
                this.ageFactor = 1.08;
                break;
            case "a51_To_60":
                this.ageFactor = 1.20;
                break;
            case "a60_more":
                this.ageFactor = 1.30;
                break;
        };

    };

    return age = new AgeFactorValues(ageInput);
};

// Table that provides a factor to be added to the initial volume in relation to a specific fitness condition
function fitnessFactorCalc() {
    let fitnessInput = $('#fitnessInput').val();

    function FitinessFactorValues(fitnessData) {

        switch (fitnessData) {
            case "excellent":
                this.fitnessFactor = 1;
                break;
            case "good":
                this.fitnessFactor = 1.05;
                break;
            case "average":
                this.fitnessFactor = 1.10;
                break;
            case "poor":
                this.fitnessFactor = 1.20;
                break;
        };

    };

    return fitness = new FitinessFactorValues(fitnessInput);
};

// Table that provides the board sizes (length, width and thickness) in relation to a specific weight range and ability
function boardSizesCalc() {
    let weightInput = $('#weightInput').val();
    let fitnessInput = $('#fitnessInput').val();
    let boardStyle = $('#styleInput').val();

    function BoardSizesCalcValues(weightData, fitnessData, styleData) {
        if (styleData === "shortboardSize") {
            switch (true) {
                case ((weightData === "w35_39_under" || weightData === "w40_44"
                    || weightData === "w45_49" || weightData === "w50_54" || weightData === "w55_59" || weightData === "w60_64")
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average")):
                    this.boardLength = "6′0″-6′4″";
                    this.boardWidth = "18½″-19″";
                    this.boardThickness = "2¼″-23⁄8″";
                    break;
                case ((weightData === "w35_39_under" || weightData === "w40_44"
                    || weightData === "w45_49" || weightData === "w50_54" || weightData === "w55_59" || weightData === "w60_64")
                    && fitnessData === "poor"):
                    this.boardLength = "6′2″-6′4″";
                    this.boardWidth = "18¾″-19¼″";
                    this.boardThickness = "2¼″-23⁄8″";
                    break;

                case ((weightData === "w65_69" || weightData === "w70_74"))
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average"):
                    this.boardLength = "6′2″-6′6″";
                    this.boardWidth = "18¾″-19¼″";
                    this.boardThickness = "23⁄8″-2½″";
                    break;
                case ((weightData === "w65_69" || weightData === "w70_74") && fitnessData === "poor"):
                    this.boardLength = "6′4″-6′8″";
                    this.boardWidth = "19″-20″";
                    this.boardThickness = "23⁄8″-2½″";
                    break;

                case ((weightData === "w75_79" || weightData === "w80_84"))
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average"):
                    this.boardLength = "6′4″-6′8″";
                    this.boardWidth = "19″-19¾″";
                    this.boardThickness = "2½″-25⁄8″";
                    break;
                case ((weightData === "w75_79" || weightData === "w80_84") && fitnessData === "poor"):
                    this.boardLength = "6′6″-6′10″";
                    this.boardWidth = "19½″-20½″";
                    this.boardThickness = "2½″-25⁄8″";
                    break;

                case ((weightData === "w85_89" || weightData === "w90_94"))
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average"):
                    this.boardLength = "6′8″-7′2″";
                    this.boardWidth = "19½″-20½″";
                    this.boardThickness = "25⁄8″-27⁄8″";
                    break;
                case ((weightData === "w85_89" || weightData === "w90_94") && fitnessData === "poor"):
                    this.boardLength = "6′10″-7′4″";
                    this.boardWidth = "20″-21½″";
                    this.boardThickness = "2¾″-3″";
                    break;

                case ((weightData === "w95_99" || weightData === "w100_104" || weightData === "w105_109" || weightData === "w110_more")
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average")):
                    this.boardLength = "7′2″ +";
                    this.boardWidth = "20″-21½″";
                    this.boardThickness = "3″-3¼″";
                    break;
                case ((weightData === "w95_99" || weightData === "w100_104" || weightData === "w105_109" || weightData === "w110_more")
                    && fitnessData === "poor"):
                    this.boardLength = "7′4″ +";
                    this.boardWidth = "21½″-22½″";
                    this.boardThickness = "3″-3¼″";
                    break;
            };
        } else if (styleData === "funboardSize") {
            switch (true) {
                case ((weightData === "w35_39_under" || weightData === "w40_44"
                    || weightData === "w45_49" || weightData === "w50_54" || weightData === "w55_59" || weightData === "w60_64")
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average")):
                    this.boardLength = "6′8″-7′2″";
                    this.boardWidth = "20½″-21¼″";
                    this.boardThickness = "2¼″-2½″";
                    break;
                case ((weightData === "w35_39_under" || weightData === "w40_44"
                    || weightData === "w45_49" || weightData === "w50_54" || weightData === "w55_59" || weightData === "w60_64")
                    && fitnessData === "poor"):
                    this.boardLength = "7′0″-7′4″";
                    this.boardWidth = "20¼″-21″";
                    this.boardThickness = "2½″-2¾″";
                    break;

                case ((weightData === "w65_69" || weightData === "w70_74"))
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average"):
                    this.boardLength = "6′10-7′4″";
                    this.boardWidth = "20¾″-21½″";
                    this.boardThickness = "2½″-2¾″";
                    break;
                case ((weightData === "w65_69" || weightData === "w70_74") && fitnessData === "poor"):
                    this.boardLength = "7′2″-7′8″";
                    this.boardWidth = "20½″-21½″";
                    this.boardThickness = "2¾″-3″";
                    break;

                case ((weightData === "w75_79" || weightData === "w80_84"))
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average"):
                    this.boardLength = "7′2″-7′8″";
                    this.boardWidth = "21″-21¾″";
                    this.boardThickness = "2½″-3″";
                    break;
                case ((weightData === "w75_79" || weightData === "w80_84") && fitnessData === "poor"):
                    this.boardLength = "7′6″-8′0";
                    this.boardWidth = "21″-21¾″";
                    this.boardThickness = "2¾″-3″";
                    break;

                case ((weightData === "w85_89" || weightData === "w90_94"))
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average"):
                    this.boardLength = "7′6″-8′0″";
                    this.boardWidth = "21½″ -22¼″";
                    this.boardThickness = "2¾″-3¼″";
                    break;
                case ((weightData === "w85_89" || weightData === "w90_94") && fitnessData === "poor"):
                    this.boardLength = "7′10″-8′4″";
                    this.boardWidth = "21½″-22¼″";
                    this.boardThickness = "3″-3¼″";
                    break;

                case ((weightData === "w95_99" || weightData === "w100_104" || weightData === "w105_109" || weightData === "w110_more")
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average")):
                    this.boardLength = "7′10″-8′4″";
                    this.boardWidth = "22″-22¾″";
                    this.boardThickness = "3″-3¼″";
                    break;
                case ((weightData === "w95_99" || weightData === "w100_104" || weightData === "w105_109" || weightData === "w110_more")
                    && fitnessData === "poor"):
                    this.boardLength = "8′2″-8′8″";
                    this.boardWidth = "22″-22¾″";
                    this.boardThickness = "3¼″ +";
                    break;
            }
        } else if (styleData === "longboardSize") {
            switch (true) {
                case ((weightData === "w35_39_under" || weightData === "w40_44"
                    || weightData === "w45_49" || weightData === "w50_54"
                    || weightData === "w55_59" || weightData === "w60_64" || weightData === "w65_69")
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average")):
                    this.boardLength = "9′4″";
                    this.boardWidth = "20½″-21¼″";
                    this.boardThickness = "2¾″+";
                    break;
                case ((weightData === "w35_39_under" || weightData === "w40_44"
                    || weightData === "w45_49" || weightData === "w50_54"
                    || weightData === "w55_59" || weightData === "w60_64" || weightData === "w65_69")
                    && fitnessData === "poor"):
                    this.boardLength = "9′4″";
                    this.boardWidth = "22¾″-23½″";
                    this.boardThickness = "2½″-3½″";
                    break;

                case ((weightData === "w70_74" || weightData === "w75_79" || weightData === "w80_84"
                    || weightData === "w85_89"))
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average"):
                    this.boardLength = "9′4″-9′10″";
                    this.boardWidth = "20¾″-21½″";
                    this.boardThickness = "2¾″+";
                    break;
                case ((weightData === "w70_74" || weightData === "w75_79" || weightData === "w80_84"
                    || weightData === "w85_89") && fitnessData === "poor"):
                    this.boardLength = "9′4″-9′10″";
                    this.boardWidth = "22¾″-23½″";
                    this.boardThickness = "2½″-3½″";
                    break;


                case ((weightData === "w90_94" || weightData === "w95_99" || weightData === "w100_104"
                    || weightData === "w105_109" || weightData === "w110_more")
                    && (fitnessData === "excellent" || fitnessData === "good" || fitnessData === "average")):
                    this.boardLength = "9′10″+";
                    this.boardWidth = "21″-21¾″";
                    this.boardThickness = "2½″";
                    break;
                case ((weightData === "w90_94" || weightData === "w95_99" || weightData === "w100_104"
                    || weightData === "w105_109" || weightData === "w110_more")
                    && fitnessData === "poor"):
                    this.boardLength = "9′10″+";
                    this.boardWidth = "23″+";
                    this.boardThickness = "3½″+";
                    break;
            };
        };
    };

    return boardSizes = new BoardSizesCalcValues(weightInput, fitnessInput, boardStyle);
};

















