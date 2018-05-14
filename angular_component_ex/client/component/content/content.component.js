angular.module('main')
    .component('content',{
        templateUrl:'./component/content/content.component.html',
        controller: function(){
            this.comment = 'Content section';
            console.log('on');
        }
    })

    