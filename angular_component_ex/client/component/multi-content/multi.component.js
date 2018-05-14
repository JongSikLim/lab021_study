angular.module('main')
    .component('multi',{
        templateUrl:'./component/multi-content/multi.component.html',
        controller: function(){
            this.comment = 'Routing well done!';
        }
    })