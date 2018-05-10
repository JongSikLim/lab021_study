angular.module('main2', [])
    .controller('mainController', function($scope, $http){
        $scope.infos = [];
        $http.get('/api/infos').then(function success(res){
            console.log(res);
            $scope.infos = res.data;
        },function error(err){
            console.log(err);
        });
        
        $scope.post= function(newData){            
            $http.post('/api/infos', {num:newData}).then(function success(res){
                console.log(res.data);
                $scope.infos= res.data;
            }, function error(err){console.log(err);});
        }
        
        $scope.delete = function(info){
            console.log('/api/infos/'+info);
            $http.delete('/api/infos/'+info).then(function success(res){
                console.log(res);
            }, 
            function error(err){
                console.log(err);
            })
        }
    });

