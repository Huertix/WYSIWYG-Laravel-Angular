myApp.controller('myController',['$scope','projectModel','userModel','$location',
    function($scope, projectModel, userModel, $location){
    angular.extend($scope, {

        login:{},

        save:{},

        user: {},

        register: {},

        data: {
            text: ''
        },
        projects: projectModel.projects,

        showUser: false,
        showLogin: true,
        isProjectsListOpen: false,
        isProjectsListClose: true,

        loadText: function(id){
            this.data.text = projectModel.loadText(id);
            this.save.name = projectModel.getName(id);
            this.save.comment = projectModel.getComment(id);
            this.toggleProjectsList();

        },
        remove: function(id){
            if(userModel.getUserObject() != null)
                projectModel.removeProject(id);
            else
                projectModel.removeFromGUI(id);
        },
        reset: function(){
            projectModel.resetAllActive();
            this.data.text = '';
            this.save.name = '';
            this.save.comment = '';
        },
        triggerSaveModal: function(){
            if(userModel.getUserObject() != null)
                $('#saveModal').modal();
            else
                this.triggerLoginModal();
        },
        saveProject: function(){

            var project = {};
            var projectActive = projectModel.getProjectActive();

            project.name = this.save.name;
            project.comment = this.save.comment;
            project.body = this.data.text;
            project.owner_id = userModel.getUserObject().id;

            if(projectActive != null){
                project.id = projectActive.id;
                projectModel.updateProjects(project);
            }else
                projectModel.saveProjects(project);

            $('#saveModal').modal('hide');
        },
        triggerLoginModal: function(){
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
                $location.path('/o');
            });
            
            $('#loginModal').modal('hide');
        },
        doLogout: function(){
            userModel.doUserLogout();
            $scope.showLogin = true;
            $scope.showUser= false;
            this.reset();
            projectModel.projects.splice(0,projectModel.projects.length);
            init();
        },
        triggerRegisterModal: function(){
            $('#loginModal').modal('hide');
            $('#registerModal').modal();
        },
        doRegister: function() {
            var newUser = {};
            newUser.name = $scope.register.name;
            newUser.email = $scope.register.email;
            newUser.password = $scope.register.password;
            console.log(newUser);
            userModel.registerUser(newUser);

            $('#registerModal').modal('hide');
        },
        getClass: function(object){
            return object.isActive ? 'active' : '';
        },
        toggleProjectsList: function(){
            this.isProjectsListOpen = !this.isProjectsListOpen;
            this.isProjectsListClose = !this.isProjectsListClose;
        }
    });

    // method to initialize user info in header
    var init = function () {
        if(userModel.getUserObject()){
            $scope.showUser = true;
            $scope.showLogin = !$scope.showUser;
            $scope.user.name = userModel.getUserObject().name;
            projectModel.getProjects();
        }else{
            projectModel.projects[0] =
            {
                isActive: false,
                id: 0,
                name: 'Example',
                comment: 'This is an example',
                date: new Date(),
                text: '<p>Test Content<p>'
            };
        }
    };
    init();
}]);