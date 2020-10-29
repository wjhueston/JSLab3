$(document).ready(
    function(){
        //Events
        $("#calcFees").click(TotalLateItems)
        $("#getCoworkerCount").click(TotalCoworkers)
        $("#calcPizzaCost").click(PizzaMath)
        //Functions


        function TotalLateItems(){
            var totalDue = 0
            var lateBooks = parseInt($("#lateBooks").val())
            totalDue+=lateBooks * 0.25
            var lateDVDs = parseInt($("#lateDVDs").val())
            totalDue+=lateDVDs *0.50
            $(".totalFees").text(totalDue.toFixed(2))
            $(".hideFees").show();
        }


//Pizza Stuff
        var cheesePricePerCoworker = 15;
        var coworkers = 0;
        function TotalCoworkers() {
            var totalCoworkers = 0
            totalCoworkers = parseInt($("#pizzaEaters").val())
            coworkers = totalCoworkers;
            cheesePricePerCoworker = 15 / totalCoworkers
            var coworkerNumber = 1
            $(".coWorkerNumber").text(coworkerNumber)
            while (totalCoworkers > 0) {
                switch (coworkerNumber) {
                    case 1:
                        $(".coworkerOne").show();
                        break;
                    case 2:
                        $(".coworkerTwo").show();
                        break;
                    case 3:
                        $(".coworkerThree").show();
                        break;
                    case 4:
                        $(".coworkerFour").show();
                        break;
                    case 5:
                        $(".coworkerFive").show();
                        break;
                    case 6:
                        $(".coworkerSix").show();
                        break;
                    case 7:
                        $(".coworkerSeven").show();
                        break;
                    case 8:
                        $(".coworkerEight").show();
                        break;
                    default:
                        break;
                }
                coworkerNumber++;
                totalCoworkers--;
            }
        }
            function PizzaMath(){
                var coworkerOneDues = cheesePricePerCoworker + (parseInt($("#coworkerOneInput").val()) * 1.25)
                var coworkerTwoDues = cheesePricePerCoworker + (parseInt($("#coworkerTwoInput").val()) * 1.25)
                var coworkerThreeDues = cheesePricePerCoworker + (parseInt($("#coworkerThreeInput").val()) * 1.25)
                var coworkerFourDues = cheesePricePerCoworker + (parseInt($("#coworkerFourInput").val()) * 1.25)
                var coworkerFiveDues = cheesePricePerCoworker + (parseInt($("#coworkerFiveInput").val()) * 1.25)
                var coworkerSixDues = cheesePricePerCoworker + (parseInt($("#coworkerSixInput").val()) * 1.25)
                var coworkerSevenDues = cheesePricePerCoworker + (parseInt($("#coworkerSevenInput").val()) * 1.25)
                var coworkerEightDues = cheesePricePerCoworker + (parseInt($("#coworkerEightInput").val()) * 1.25)
                var coworkerNumber = 1
                while(coworkers > 0){
                    switch(coworkerNumber){
                        case 1:
                            $(".finalOne").show();
                            $(".coworkerOneOutput").text(coworkerOneDues.toFixed(2 ))
                            break;
                        case 2:
                            $(".finalTwo").show();
                            $(".coworkerTwoOutput").text(coworkerTwoDues.toFixed(2 ))
                            break;
                        case 3:
                            $(".finalThree").show();
                            $(".coworkerThreeOutput").text(coworkerThreeDues.toFixed(2 ))
                            break;
                        case 4:
                            $(".finalFour").show();
                            $(".coworkerFourOutput").text(coworkerFourDues.toFixed(2 ))
                            break;
                        case 5:
                            $(".finalFive").show();
                            $(".coworkerFiveOutput").text(coworkerFiveDues.toFixed(2 ))
                            break;
                        case 6:
                            $(".finalSix").show();
                            $(".coworkerSixOutput").text(coworkerSixDues.toFixed(2 ))
                            break;
                        case 7:
                            $(".finalSeven").show();
                            $(".coworkerSevenOutput").text(coworkerSevenDues.toFixed(2 ))
                            break;
                        case 8:
                            $(".finalEight").show();
                            $(".coworkerEightOutput").text(coworkerEightDues.toFixed(2 ))
                            break;
                        default: break;
                    }
                    coworkerNumber++
                    coworkers--
                }
            }
        }

)