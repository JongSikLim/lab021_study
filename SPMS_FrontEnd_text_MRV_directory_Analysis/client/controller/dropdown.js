
angular.module('main').
    controller('Dropdown',DropdownController);

function DropdownController($scope){
    $scope.url = {
        cross : 'images/crossdomain-code.jpg',
        route : 'images/routing-code.jpg',
        api: 'images/api-code.jpg',
        layout: 'images/layoutState-code.jpg',
        btn_up: 'images/btnUp-code.jpg',
        tween: 'images/tweenlite-fromto-code.jpg'
    }
    $scope.title = 'Directory structure';
    // div.dl-depth-2>div.dl-depth-3
    $('div.dl').on('click', function (event) {
        var child = $(this).find('div');
        
        var length = $(this).find('div.display-none').length;
        console.log(length);
        if(length){
            $(this).find('div').removeClass('display-none');        
        }
        else {
            $(this).find('div').addClass('display-none');            
        }
        event.stopImmediatePropagation();        
    });
    $('span.guess').text('(추측)');
    $('span.question').text('???');   
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        trigger : 'click',
        html : true,        
    }); 
    $('div.right-section>button').click( function(e) {
        $('.collapse').collapse('hide');        
        $('[data-toggle="popover"]').popover('hide');
    });
    
}

//<div class="img"></div>
