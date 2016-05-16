myApp.controller('myController',['$scope','projectModel','userModel', function($scope, projectModel, userModel){
    angular.extend($scope, {

        login:{},

        save:{},

        user: {},

        data: {
            text: ''
        },
        projects: projectModel.projects,

        showUser: false,
        showLogin: true,

        loadText: function(id){
            this.data.text = projectModel.loadText(id);
            this.save.name = projectModel.getName(id);
            this.save.comment = projectModel.getComment(id);
        },
        remove: function(id){
            projectModel.removeProject(id);
        },
        reset: function(){
            projectModel.resetAllActive();
            this.data.text = '';
            this.save.name = '';
            this.save.comment = '';
        },
        trigerSaveModal: function(){
            $('#saveModal').modal();
        },
        saveProject: function(){
            var index;
            var projectActive = projectModel.getProjectActive();
            if(projectActive != null){
                index = projectModel.findProjectIndex(projectActive.id);
            }else{
                projectModel.resetAllActive();
                index = this.projects.length;
            }
            projectModel.projects[index] =
                {
                    isActive: true,
                    id: this.projects.length,
                    name: $scope.save.name,
                    comment: $scope.save.comment,
                    date: new Date(),
                    text: $scope.data.text
                };

            $('#saveModal').modal('hide');

        },
        trigerLoginModal: function(){
            $('#loginModal').modal();
        },
        doLogin: function(){
            var data = {
                email: $scope.login.email,
                password: $scope.login.password
            };
            userModel.doLogin(data).then(function () {
                $scope.user.name = userModel.getUserObject().name;
                $scope.showLogin = false;
                $scope.showUser= true;
                projectModel.getProjects();
            });
            
            $('#loginModal').modal('hide');
        },
        doLogout: function(){
            userModel.doUserLogout();
            $scope.showLogin = true;
            $scope.showUser= false;
            this.reset();
            projectModel.projects.splice(0,projectModel.projects.length);
        },
        getClass: function(object){
            return object.isActive ? 'active' : '';
        }
    });

    // method to initialize user info in header
    var init = function () {
        if(userModel.getUserObject()){
            $scope.showUser = true;
            $scope.showLogin = !$scope.showUser;
            $scope.user.name = userModel.getUserObject().name;
            projectModel.getProjects();
        }


    };
    init();
}]);