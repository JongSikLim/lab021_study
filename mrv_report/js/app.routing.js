var app = angular.module('mrv');
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            component: 'content'
        })
        .state('event',{
            url: '/',
            component: 'event'
        })

});
