"use strict";
app.controller("RPSController", function($scope) {
    $scope.weapons = [
        {value: 'R', label: 'Rock'},
        {value: 'P', label: 'Paper'},
        {value: 'S', label: 'Scissors'}
    ];
    $scope.gameOver = false;
    $scope.computerChoice = null;
    $scope.playerChoice = null;
    $scope.outcome = null;

    $scope.battle = function(weapon) {
        $scope.playerChoice = weapon;
        $scope.gameOver = true;
        $scope.computerChoice = $scope.weapons[Math.floor(Math.random()*$scope.weapons.length)];
        $scope.outcome = getRPSOutcome(
            $scope.weapons.map(function(weapon){ return weapon.value; }),
            $scope.playerChoice.value,
            $scope.computerChoice.value
            );
    };
});