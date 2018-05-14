var ContentController = function($location){
    this.comment = 'Hi Im content component comment';
    this.click = function(){
        this.comment = 'event is called by Controller method';
        alert('hi yo man! what up');
    }
    console.log('Content controller is loaded successfully!');
    console.log($location.path());
};

angular.module('main')
    .component('content',{
        templateUrl:'./component/content/content.component.html',
        controller: ContentController
    });

    