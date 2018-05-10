angular.module('main')
    .component('footer',{
        template: '{{$ctrl.comment}}',
        controller: function(){
            this.comment = 'Footer section';
        }
    })