angular.module('main')
    .component('header',{
        template: '{{$ctrl.comment}}',
        controller: function(){
            this.comment = 'Header section';
        }
    })