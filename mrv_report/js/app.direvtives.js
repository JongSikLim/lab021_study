var app = angular.module('mrv');

app.directive('positionInputBox', function(){
    return {
        restrict: 'E',
        template: '<h1>inputfiled</h1>'
    }
});
app.directive('consumptionInputBox', function(){
    return {
        restrict: 'E',
        templateUrl: 'client/directives/consumption.directive.html'        
    }
});