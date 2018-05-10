angular.module('main')
    .component('content',{
        template: '{{$ctrl.comment}}',
        controller: function(){
            this.comment = 'Content section';
        }
    })