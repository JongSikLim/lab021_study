var app = angular.module('mrv');
app.controller('reportController', function($scope, $rootScope){
    $scope.inpux_status={
        position : false,
        consumption : true        
    }
    $scope.title = $rootScope.nowEvent;
    console.log($rootScope.nowEvent);
})