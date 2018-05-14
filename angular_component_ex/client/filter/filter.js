var app = angular.module('main');
app.filter('overFive', function(){
    return function(input){
        return input >  5 ?  input : null ;
    }
})