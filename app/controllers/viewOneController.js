expenseMod.controller("ViewOneController", function ($scope) {
    'use strict';
    
    $scope.expenses = [];
    /*
    $scope.travelExpense = {
        index: 0,
        destination: 'Joensuu',
        leaveDate: Date,
        returnDate: Date,
    };
    */
    $scope.counter = 1;
    
    $scope.change = function() {
        $scope.counter++;
        console.log($scope.counter);
        
        var expense = {
            index: $scope.expenses.length,
            destination: $scope.destinationText,
            leaveDate: '04-08-2015',
            returnDate: '06-09-2015'
        };
        
        $scope.expenses.push(expense);
        //console.log($scope);
        console.log($scope.expenses);
    };
    
    // 
    $scope.getNumber = function(num) {
        return new Array(num);
    };
    
});