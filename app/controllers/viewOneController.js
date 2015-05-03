// Main controller for New Expense Claim view
expenseMod.controller("ViewOneController", function ($scope) {
    'use strict';
    
    // Array to keep all different types in form
    $scope.travelFinExpenses = [];
    $scope.travelForExpenses = [];
    $scope.otherExpenses = [];

    // Array to be used with ng-repeat to view correct amount of form-elements
    $scope.travelFinCounter = [1];
    $scope.travelForCounter = [1];
    
    $scope.newTravelFinForm = function() {
        console.log($scope.travelFinExpenses);
        $scope.travelFinCounter.push(1);
    };
    
    $scope.removeTravelFinForm = function() {
        // Always show one instance of partial form
        if($scope.travelFinCounter.length > 1) {
            $scope.travelFinCounter.pop();
            $scope.travelFinExpenses.pop();
        }
    };
    
     $scope.newTravelForForm = function() {
        console.log($scope.travelForExpenses);
        $scope.travelForCounter.push(1);
    };
    
    $scope.removeTravelForForm = function() {
        // Always show one instance of partial form
        if($scope.travelForCounter.length > 1) {
            $scope.travelForCounter.pop();
            $scope.travelForExpenses.pop();
        }
    };
    
});

// Controller for Travel Expense Finland
expenseMod.controller("TravelExpenseFinController", function($scope) {
    
    $scope.travelExpense = {
        index: $scope.travelFinExpenses.length,
        destination: $scope.destination,
        leaveDate: $scope.leaveDate,
        returnDate: $scope.returnDate,
        halfDay: $scope.halfDay,
        leaveTime: $scope.leaveTime,
        returnTime: $scope.returnTime,
        fullDay: $scope.returnTime
    };
    $scope.travelFinExpenses.push($scope.travelExpense);
});

// Controller for Travel Expense Foreign
expenseMod.controller("TravelExpenseForController", function($scope) {
    
    $scope.travelExpense = {
        index: $scope.travelForExpenses.length,
        destination: $scope.destination,
        leaveDate: $scope.leaveDate,
        returnDate: $scope.returnDate,
        halfDay: $scope.halfDay,
        leaveTime: $scope.leaveTime,
        returnTime: $scope.returnTime,
        fullDay: $scope.returnTime
    };
    $scope.travelForExpenses.push($scope.travelExpense);
});

// Controller for Travel Expense Finland
expenseMod.controller("OtheExpenseController", function($scope) {
    
    $scope.otherExpense = {
            index: $scope.otherExpenses.length,
            purchaseDate: $scope.purchaseDate,
            description: $scope.description,
            price: $scope.price,
            amount: $scope.amount,
            attachedFile: $scope.attachedFile
    };
    $scope.otherExpenses.push($scope.otherExpense);
});
