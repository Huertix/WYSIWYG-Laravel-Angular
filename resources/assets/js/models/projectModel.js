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
        return $http({
            headers: {
                'Content-Type':'application/json'
            },
            url: baseUrl + 'project/' + id,
            method: "DELETE",
        }).success(function(response){
            var projectsObj = angular.fromJson(JSON.stringify(response));
            projectModel.getProjects();
            projectModel.removeFromGUI(id);
            
        }).error(function(data, status, headers){
            console.log(data, status, headers);
            alert('Project Remove  Error');
        });

    };
    
    projectModel.removeFromGUI = function(id){
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

    projectModel.saveProjects = function(obj){

        return $http({
            headers: {
                'Content-Type':'application/json'
            },
            url: baseUrl + 'project',
            method: "POST",
            data: {
                name: obj.name,
                comment: obj.comment,
                body: obj.body,
                owner_id: obj.owner_id
            }
        }).success(function(response){
            var projectsObj = angular.fromJson(JSON.stringify(response));
            projectModel.getProjects();
        }).error(function(data, status, headers){
            console.log(data, status, headers);
            alert('Project Save Error');
        });

    };


    projectModel.updateProjects = function(obj){
        return $http({
            headers: {
                'Content-Type':'application/json'
            },
            url: baseUrl + 'project/' + obj.id,
            method: "PUT",
            data: {
                id: obj.id,
                name: obj.name,
                comment: obj.comment,
                body: obj.body,
                owner_id: obj.owner_id
            }
        }).success(function(response){
            var projectsObj = angular.fromJson(JSON.stringify(response));
            projectModel.getProjects();

        }).error(function(data, status, headers){
            console.log(data, status, headers);
            alert('Project Update Error');
        });

    };

    return projectModel
}]);