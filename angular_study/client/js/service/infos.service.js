
angular.module('main')
    .factory('InfoService', function($http){

        var storage = {
            //데이터 형태 선언
            infos:[],
            
            //get 구현           
            get: function (callback) { //callback 함수로 처리
              $http.get('/api/infos').then(function success(res){                                 
                  /*
                    callback 함수의 인자를 넘기는 것이다.
                    service에서 받을 콜백에서 첫번째 인자는 err 메시지, 두번째 인자는 get을 통해서 받아온 데이터
                  */
                  callback(null, angular.copy(res.data, storage.infos));
              }, function error(err){ //에러 발생시
                console.log('get failed!');
                //파라미터로 데이터를 넘기지 않고 error 메시지만 넘긴다.
                callback(err);
              });
            },
            
            post: function(newName, newAge) {                                
                var newInfo = {name:newName, age:newAge};
                $http.post('/api/infos', newInfo).then(function success(res){
                    console.log(res);
                }, function error(err){

                });
            },

            delete: function(id) {
                var deleteInfoIdx = storage.infos.findIndex(function(info){
                    return info.id === id;
                });
                if(deleteInfoIdx === -1) return;
                storage.infos.splice(deleteInfoIdx, 1);
                for(var i=deleteInfoIdx;i<storage.infos.length;i++){
                    storage.infos[i].id--;
                }
            },
            
        }
        return storage;
});