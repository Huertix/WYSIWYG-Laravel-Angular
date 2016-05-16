myApp.controller('myController',['$scope','projectModel', function($scope, projectModel){
    angular.extend($scope, {

        login:{},

        save:{},

        data: {
            text: ''
        },
        projects: projectModel.projects,

        loadText: function(id){
            console.log(id);
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
            console.log($scope.save.name);
            console.log($scope.save.comment);
            console.log($scope.data.text);

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
            console.log($scope.login.email);
            console.log($scope.login.password);
            $('#loginModal').modal('hide');
        },
        getClass: function(object){
            console.log(object.isActive);
            return object.isActive ? 'active' : '';
        }
    });
}]);