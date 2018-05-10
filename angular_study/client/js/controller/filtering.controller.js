angular.module('main')
    .controller('filtering', function($scope, InfoService){                
        InfoService.get(function(err, infos){
            console.log('get did!');
            if(err) return;            
            //console.log(infos);
            $scope.infos = infos;
        })
        
        $scope.status = 0;
                
        $scope.$watch('status', function(){
            if($scope.status === 1){
                
            }
        });
        $scope.statusSet = function(val){
            $scope.status = val;
            console.log($scope.status);
        }
        $scope.orderByStatus = function(orderStatus){
            console.log('on');
            $scope.myOrderBy = orderStatus;
        }

        $scope.delete = function(id){
            if(!id)  return;
            InfoService.delete(id);
        }

        $scope.post = function(newName, newAge){            
            if(newName == undefined || newAge == undefined) return;                                    
            InfoService.post(newName, newAge);
            $scope.name = $scope.age = undefined;
        }
    });