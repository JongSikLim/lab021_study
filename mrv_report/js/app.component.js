var app = angular.module('mrv');
app.component('nav',{
    templateUrl: 'client/component/layout/nav.html',
    controller: function(){
        this.title = 'Hi nav';
        $('button.btn-event').on('click', function(){
            $('button.btn-event').removeClass('active');
            $(this).addClass('active');            
        })
    }
});
app.component('sidebar',{
    templateUrl: 'client/component/layout/sidebar.html',
    controller: function(){
        this.title = 'Hi sidebar';
    }
});
app.component('content',{
    templateUrl: 'client/component/content.html',
    controller: function($scope, $rootScope, $state){
        this.title = 'Hi content';
        $scope.title2 = 'hey';
        $('span.meneuvering').text('Meneuvering');
        $('span.inPort').text('In Port');
        $('tr').on('click', function(event){
            var str = event.currentTarget.children[0].innerText;            
            $rootScope.nowEvent = str;
            $state.go('event');
        });
    }
});
app.component('footer',{
    templateUrl: 'client/component/layout/footer.html',
    controller: function(){
        this.title = 'Hi footer';
    }
});
app.component('event',{
    templateUrl: 'client/component/report-input/report-input.html',
    controller: ControllerEvent
});

function ControllerEvent($scope){
    $scope.title = 'Event';
}