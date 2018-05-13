var wins = 0;
var losses = 0;
var randomTarget = Math.floor((Math.random() * 101) + 19);
var total = 0;


$(document).ready(function () {
    $("#winChange").text(" " + wins);
    $("#lossChange").text(" " + losses);
    update();
    gamePlay();
    winLose();
});

crystalOne = Math.floor(Math.random() * 12) + 1;
crystalTwo = Math.floor(Math.random() * 12) + 1;
crystalThree = Math.floor(Math.random() * 12) + 1;
crystalFour = Math.floor(Math.random() * 12) + 1;

function update() {
    var grandTotal = 0;
    $("#grandTotal").text(grandTotal);
    $("#target").text(randomTarget);
    $("#hiddenOne").val(crystalOne);
    $("#hiddenTwo").val(crystalTwo);
    $("#hiddenThree").val(crystalThree);
    $("#hiddenFour").val(crystalFour);

}

function winLose() {

    function kickoff() {
        total = 0;
        randomTarget = Math.floor((Math.random() * 101) + 19);
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        $("#grandTotal").text(total);
        $("#target").text(randomTarget);
        $("#hiddenOne").val(crystalOne);
        $("#hiddenTwo").val(crystalTwo);
        $("#hiddenThree").val(crystalThree);
        $("#hiddenFour").val(crystalFour);

    }

    if (total == randomTarget) {
        alert("You win");
        wins++;
        $("#winChange").text(" " + wins);
        kickoff();
    } else if (total > randomTarget) {
        alert("You lose!");
        losses++;
        $("#lossChange").text(" " + losses);
        kickoff();
    }

}

function gamePlay() {



    function addCrystalOne() {
        $("#hiddenOne").on("click", function () {
            total = total + crystalOne;
            $("#grandTotal").text(total);
            winLose();
        });
    }

    function addCrystalTwo() {
        $("#hiddenTwo").on("click", function () {
            total = total + crystalTwo;
            $("#grandTotal").text(total);
            winLose();
        });
    }

    function addCrystalThree() {
        $("#hiddenThree").on("click", function () {
            total = total + crystalThree;
            $("#grandTotal").text(total);
            winLose();
        });
    }

    function addCrystalFour() {
        $("#hiddenFour").on("click", function () {
            total = total + crystalFour;
            $("#grandTotal").text(total);
            winLose();
        });
    }

    addCrystalFour();
    addCrystalOne();
    addCrystalThree();
    addCrystalTwo();
}



// function newTotal() {
//     firstTotal = 0;
//     return firstTotal;
// }