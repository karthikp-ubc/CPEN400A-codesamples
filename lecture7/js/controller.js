var todoApp = angular.module("todoApp", []);

todoApp.controller('TodoController', function($scope) {
    $scope.todoList = [];
    $scope.listSize = 0;
    $scope.userInput = "";
    
    $scope.addItem = function() {
        $scope.todoList.push({val: $scope.userInput, editing: false});
        $scope.listSize = $scope.listSize + 1;
    };
    
    $scope.removeItem = function(idx) {
        $scope.todoList.splice(idx, 1);
        $scope.listSize = $scope.listSize - 1;
    };
    
    $scope.startEditing = function(idx) {
        $scope.todoList[idx].editing = true;
    };
    
    $scope.updateItem = function(keyEvent, idx) {
        if (keyEvent.which == 13) { //Enter key
            $scope.todoList[idx].editing = false;
        }
    };
});