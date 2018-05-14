var controll = function($scope){
    
    $scope.comment = "I'm multi-content view!"
    $scope.onDblclick = function(text){
        $scope.comment = text;
    }
}


angular.module('main')
    .component('multi',{
        // templateUrl:'./component/multi-content/multi.component.html',
        templateUrl:'./component/multi-content/multi.component.html',
        controller: function MultiController(){            
            this.comment = 'inner Ctrl comment';
            console.log('hihihihi');
        }
    });



