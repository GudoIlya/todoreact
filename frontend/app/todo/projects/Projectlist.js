import React from 'react';
import Projectheader from './Projectheader';
import Projectitem from './Projectitem';

class Projectlist extends React.Component {
    constructor(props) {
        super(props);

        this.collectProjects = this.collectProjects.bind(this);
    }

    collectProjects(tasks) {
        let withoutProject = "Без проекта";
        let projects = {};
        projects[withoutProject] = {
            name : withoutProject,
            number : 0
        };
        if(tasks.length) {
            let project;
            tasks.map(function(task, i){
                let project = task.project;
                if(project == "") {
                    project = withoutProject;
                }
                if(project in projects) {
                    projects[project]['number'] += 1;
                } else {
                    projects[project] = {
                        name   : project,
                        number : 1
                    };
                }
            });
        }
        return projects;
    }

    render() {
        let projects = this.collectProjects(this.props.tasks);
        let me = this;
        return (
            <div>
                <Projectheader projects={projects} doFiltrate={me.props.doFiltrate}/>
                {projects ? Object.keys(projects).map(function(key, index){
                    console.log('wqweqw');
                    return <Projectitem key={key} projectKey={key} project={projects[key]} doFiltrate={me.props.doFiltrate}/>
                }) : 'Нет проектов'}
            </div>
        );
    }
}

export default Projectlist;