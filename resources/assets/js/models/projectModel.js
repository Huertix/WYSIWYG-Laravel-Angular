myApp.factory('projectModel',[function(){
    var projectModel = {};


    projectModel.projects =  [
        {
            id: 0,
            name: 'TEST1',
            comment: 'This is Test1',
            date: '1.1.11',
            text: '<p>Hola luis<br></p>'
        },
        {
            id: 1,
            name: 'TEST2',
            comment: 'This is Test2',
            date: '2.2.22',
            text: '<p>Hola Pepe<br></p>'
        },
        {
            id: 2,
            name: 'TEST3',
            comment: 'This is Test3',
            date: '3.3.33',
            text: '<p>Hola jose<br></p>'
        },
        {
            id: 3,
            name: 'TEST4',
            comment: 'This is Test4',
            date: '4.4.44',
            text: '<p>Hola Miguel<br></p>'
        }
    ];

    projectModel.loadText = function(id){
        return projectModel.projects[id].text;
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