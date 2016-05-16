myApp.factory('projectModel',['$http', function($http){
    var projectModel = {};

    projectModel.projects =  [];

    projectModel.loadText = function(id){
        var index = projectModel.findProjectIndex(id);
        projectModel.resetAllActive();
        projectModel.projects[index].isActive = true;
        return projectModel.projects[index].text;
    };
    projectModel.getName = function(id){
        var index = projectModel.findProjectIndex(id);
        return projectModel.projects[index].name;
    };
    projectModel.getComment = function(id){
        var index = projectModel.findProjectIndex(id);
        return projectModel.projects[index].comment;
    };

    projectModel.resetAllActive = function(){
      for( var i=0; i< projectModel.projects.length; i++){
          projectModel.projects[i].isActive = false;
      }
    };

    projectModel.getProjectActive = function(){
        for( var i=0; i< projectModel.projects.length; i++){
            if( projectModel.projects[i].isActive )
                return projectModel.projects[i];
        }
        return null;
    };

    projectModel.removeProject = function(id){

        var index = projectModel.findProjectIndex(id);

        if(index != null){
            projectModel.projects.splice(index,1);
        }
    };

    projectModel.findProjectIndex = function(id){
        for (var i=0; i < projectModel.projects.length; i++ ){
            if (projectModel.projects[i].id === id) {
                return i;
            }
        }
        return null;
    };

    projectModel.getProjects = function(){
        return $http({
            headers: {
                'Content-Type':'application/json'
            },
            url: baseUrl + 'project',
            method: "GET"
        }).success(function(response){

            var projectsObj = angular.fromJson(JSON.stringify(response));

            for (var i=0; i < projectsObj.length; i++){

                projectModel.projects[i] =
                {
                    isActive: false,
                    id: projectsObj[i].id,
                    name: projectsObj[i].name,
                    comment: projectsObj[i].comment,
                    date: projectsObj[i].updated_at,
                    text: projectsObj[i].body
                }
            }
        }).error(function(data, status, headers){
            console.log(data, status, headers);
            alert('Projects Load Error');
        });
        
    };

    return projectModel
}]);