myApp.factory('userModel',['$http','$window',function($http, $window){
    var userModel = {};

    userModel.doLogin = function(data){
        
        return $http({
            headers: {
                'Content-Type':'application/json'
            },
            url: baseUrl + 'auth',
            method: "POST",
            data: {
                email: data.email,
                password: data.password
            }
        }).success(function(response){
            $window.sessionStorage["auth"] = JSON.stringify(response);
        }).error(function(data, status, headers){
            console.log(data, status, headers);
            alert('Login Error');
        });
    };

    userModel.getAuthStatus = function(){
        var status = $window.sessionStorage["auth"];
        if(status){
            console.log('status yes ' + status);
            return true;
        } else {
            console.log('status no ' + status);
            return false;
        }
    };

    userModel.getUserObject = function() {
        var userObj = angular.fromJson($window.sessionStorage["auth"]);
        if(userObj != null)
            return userObj;
        return null;
    }

    userModel.doUserLogout = function(){
        delete $window.sessionStorage["auth"];
    };


    return userModel
}]);