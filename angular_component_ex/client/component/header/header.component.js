angular.module('main')
    .component('header',{
        templateUrl: './component/header/header.html',        
        controller: function(){
            this.comment = 'Header section';
        },        
    })

    