angular.module('main',['ngRoute', 'ui.router'])
    .config(function($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl:'./js/hi.html'
        })
        .when('/content', {
            templateUrl: './component/content/content.component.html'
        })
        .when('/multi', {
            templateUrl: './component/multi-content/multi.component.html'
        });
    }).config(function($stateProvider){
        var first ={
            name: 'about',
            url: './about',
            templateUrl: './component/content/content.component.html'
        }

        var second ={
            name: 'second',
            url: './second',
            template: '<h1>Im a ui-router!!!!</h1>'
        }
        
        $stateProvider.state(first);
        $stateProvider.state(second);
    });
        
    