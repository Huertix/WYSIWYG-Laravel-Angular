myApp.controller('myController',['$scope','projectModel', function($scope, projectModel){
    angular.extend($scope, {

        login:{},

        data: {
            text: ''
        },
        projects: projectModel.projects,

        loadText: function(id){
            console.log(id);
            this.data.text = projectModel.loadText(id);
        },
        remove: function(id){
            projectModel.removeProject(id);
        },
        reset: function(){
            projectModel.resetAllActive();
            this.data.text = '';
        },
        save: function(){
            $('#saveModal').modal();
        },
        trigerLoginModal: function(){
            $('#loginModal').modal();
        },
        doLogin: function(loginForm){
            console.log($scope.login.email);
            console.log($scope.login.password);
        },
        getClass: function(object){
            console.log(object.isActive);
            return object.isActive ? 'active' : '';
        }
    });
}]);