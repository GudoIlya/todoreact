import React from 'react';
import Projectheader from './Projectheader';
import Projectitem from './Projectitem';

class Projectlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : this.collectProjects(this.props.tasks)
        }
    }

    collectProjects(tasks) {
        let withoutProject = "Без проекта";
        let projects = {};
        projects[withoutProject] = 0;
        if(tasks.length) {
            let project;
            tasks.map(function(task, i){
                let project = task.project;
                if(project == "") {
                    project = withoutProject;
                }
                if(task.project in projects) {
                    projects[project]['number'] += 1;
                } else {
                    projects[project] = {
                        number : 0
                    };
                }
            });
        }
        console.log(projects);
        return projects;
    }

    render() {
        return (
            <div>
                <Projectheader projects={this.props.projects} />
                {this.props.projects ? this.props.projects.map(function(project, index){
                    <Projectitem key={index} projectKey={index} project={project} />
                }) : 'Нет проектов'}
            </div>
        );
    }
}

export default Projectlist;