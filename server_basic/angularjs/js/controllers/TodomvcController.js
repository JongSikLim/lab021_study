angular.module('todomvc', [])
    .controller('mvcController', function ($scope) {
        $scope.todos = [{
            id: 1,
            title: '요가 수행하기',
            completed: false
        }, {
            id: 2,
            title: '어머니 용돈 드리기',
            completed: true
        }];

        $scope.remove = function (id) {
            if (!id) return;

            var deletedTodoIdx = $scope.todos.findIndex(function (element, index, array) {
                console.log(element);
                console.log(index);
                console.log(array);
                return element.id === id;
            });

            if (deletedTodoIdx === -1) return;

            $scope.todos.splice(deletedTodoIdx, 1);
        }

        $scope.addTodo = function (todoTitle) {
            todoTitle = todoTitle.trim();
            if (!todoTitle) return;

            var newId = !$scope.todos.length ?
                1 : $scope.todos[$scope.todos.length - 1].id + 1;

            var newTodo = {
                id: newId,
                title: todoTitle,
                completed: false
            };

            $scope.todos.push(newTodo);
        };

        //watch 함수!
        $scope.$watch('status', function () {
            if ($scope.status === 'completed') {        // Completed 클릭시
                $scope.statusFilter = { completed: true };  // 필터를 설정한다. 이게 필터 쿼리인듯.
            } else if ($scope.status === 'active') {    // Active 클릭시
                $scope.statusFilter = { completed: false }; // 필터를 설정한다.
            } else {                                    // All 클릭시
                $scope.statusFilter = {};                 // 필터를 해제한다.
            }
        })

        $scope.clearCompleted = function () {
            var incompleteTodos = $scope.todos.filter(function (todo) {
              return !todo.completed;
            });
            angular.copy(incompleteTodos, $scope.todos);
          }    
    });