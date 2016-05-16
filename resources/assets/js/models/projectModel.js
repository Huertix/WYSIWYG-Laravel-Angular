myApp.factory('projectModel',[function(){
    var projectModel = {};

    projectModel.projects =  [
        {
            isActive: false,
            id: 0,
            name: 'TEST1',
            comment: 'This is Test1',
            date: '1.1.11',
            text: '<p>Hola TEST1<br></p>'
            
        },
        {
            isActive: false,
            id: 1,
            name: 'TEST2',
            comment: 'This is Test2',
            date: '2.2.22',
            text: '<p>Hola TEST2<br></p>'
        },
        {
            isActive: false,
            id: 2,
            name: 'TEST3',
            comment: 'This is Test3',
            date: '3.3.33',
            text: '<p>Hola TEST3<br></p>'
        },
        {
            isActive: false,
            id: 3,
            name: 'TEST4',
            comment: 'This is Test4',
            date: '4.4.44',
            text: '<p>Hola TEST4<br></p>'
        }
    ];

    projectModel.loadText = function(id){
        var index = projectModel.findProjectIndex(id);
        projectModel.resetAllActive();
        projectModel.projects[index].isActive = true;
        return projectModel.projects[index].text;
    };

    projectModel.resetAllActive = function(){
      for( var i=0; i< projectModel.projects.length; i++){
          projectModel.projects[i].isActive = false;
      }
    };

    projectModel.removeProject = function(id){

        var index = projectModel.findProjectIndex(id);

        if(index != null){
            console.log('MyIndex ' + index);
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
    
    return projectModel
}]);