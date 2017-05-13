"use strict"
var getRPSOutcome = getRPSOutcome || (function (allChoices, firstChoice, secondChoice) {

    if(allChoices.lastIndexOf(firstChoice) === -1 || allChoices.lastIndexOf(secondChoice) === -1) {
        return 'INVALID';
    }

    if(firstChoice === secondChoice) {
        return 'DRAW';
    }

    if(firstChoice === 'R' && secondChoice === 'S') {
        return 'WIN';
    }

    if(firstChoice === 'P' && secondChoice === 'R') {
        return 'WIN';
    }

    if(firstChoice === 'S' && secondChoice === 'P') {
        return 'WIN';
    }

    return 'LOSE';

});

