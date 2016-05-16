myApp.controller('myController',['$scope','projectModel', function($scope, projectModel){

    $scope.data = {
        text: ''
    };
    
    $scope.projects =  projectModel.projects;
    
    $scope.loadText = function(id){
        $scope.data.text = projectModel.loadText(id);
    };

    $scope.trigerLoginModal = function(){
        $('#loginModal').modal();
    };
    
}]);