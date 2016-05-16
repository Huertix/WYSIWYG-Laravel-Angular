myApp.controller('userController', ['$scope',function($scope){
    angular.extend($scope, {

        doLogin: function(loginForm){
            console.log(email);
            console.log(password);
        }

    });
}]);