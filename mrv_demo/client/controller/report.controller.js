var app = angular.module('mrv');
app.controller('report', ($scope) => {
    $scope.hi = 'hi';
});
app.controller('content', ($scope) => {
    $scope.col_per_row = 0;
    $scope.$watch('col_per_row', function (newValue, oldValue) {
        if (newValue >= 10 || newValue <= 0) return;

        //var percentage = Math.floor(100 / newValue);
        var percentage = 100 / newValue;
        var dex = newValue  * 5;        
        $('div#box').css('flex', '1 1 calc(' + percentage + '% - ' + dex + 'px)');
        /* 
    flex: 1 1 calc(100/val - val * margin )
     */
    })

    $('.btn-up').on('click', function (event) {
        var nowPanel = $(this).parents('.content-box');
        var targetPanel = nowPanel.prev('.content-box');

        var nowHeight = nowPanel.outerHeight();
        var targetHeight = targetPanel.outerHeight();
        console.log(nowPanel);
        console.log(targetPanel);
        if (targetPanel[0] === undefined) return;

        TweenLite.fromTo(nowPanel, 0.3, {
            y: 0
        }, {
            y: -targetHeight - 7
        });

        TweenLite.fromTo(targetPanel, 0.3, {
            y: 0
        }, {
            y: nowHeight + 7,
            onComplete: function () {
                if (targetPanel[0]) {
                    console.log('animation done!');

                    nowPanel.after(targetPanel);
                    //$(nowPanel).remove();

                    // top을 0px로 돌려주지 않으면 top 값이 계속 중첩되어 쌓여서 panel의 위치가 이상해짐
                    nowPanel.css('transform', 'matrix(1,0,0,1,0,0)');
                    targetPanel.css('transform', 'matrix(1,0,0,1,0,0)');
                }
            }
        });
    });

    $('.btn-down').on('click', function (event) {
        var nowPanel = $(this).parents('.content-box');
        var targetPanel = nowPanel.next('.content-box');

        var nowHeight = nowPanel.outerHeight();
        var targetHeight = targetPanel.outerHeight();
        if (targetPanel[0] === undefined) return;

        TweenLite.fromTo(nowPanel, 0.3, {
            y: 0
        }, {
            y: targetHeight + 7
        });
        TweenLite.fromTo(targetPanel, 0.3, {
            y: 0
        }, {
            y: -nowHeight - 7,
            onComplete: function () {
                if (targetPanel[0]) {
                    console.log('animation done!');
                    nowPanel.before(targetPanel);
                    // top을 0px로 돌려주지 않으면 top 값이 계속 중첩되어 쌓여서 panel의 위치가 이상해짐
                    nowPanel.css('transform', 'matrix(1,0,0,1,0,0)');
                    targetPanel.css('transform', 'matrix(1,0,0,1,0,0)');
                }
            }
        });
    });
})