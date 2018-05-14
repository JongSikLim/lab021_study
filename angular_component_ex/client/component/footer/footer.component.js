angular.module('main')
    .component('footer',{
        templateUrl:'./component/footer/footer.component.html',
        controller: function(){
            this.comment = 'Footer section';
        }
    })