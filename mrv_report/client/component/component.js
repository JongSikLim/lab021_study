var app = angular.module('mrv');
app.component('nav',{
    templateUrl: 'client/component/nav.html',
    controller: function(){
        this.title = 'Hi nav';
        $('button.btn-event').on('click', function(){
            $('button.btn-event').removeClass('active');
            $(this).addClass('active');
            
        })
    }
});
app.component('sidebar',{
    templateUrl: 'client/component/sidebar.html',
    controller: function(){
        this.title = 'Hi sidebar';
    }
});
app.component('content',{
    templateUrl: 'client/component/content.html',
    controller: function($scope){
        this.title = 'Hi content';
        $scope.title2 = 'hey';
    }
});
app.component('footer',{
    templateUrl: 'client/component/footer.html',
    controller: function(){
        this.title = 'Hi footer';
    }
});