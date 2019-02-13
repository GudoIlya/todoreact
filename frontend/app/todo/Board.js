import React from 'react';
import Todoheader from './Todoheader';
import Todolist from './Todolist';
import Projectlist from "./projects/Projectlist";
import Todoform from "./TodoForm";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksNumber   : 0,
            notDoneTasksNumber : 0,
            doneTasksNumber    : 0,
            tasks : [],
            filteredTasks : [],
            projects : [],
            filter : false
        };
        this.filtrateTasks = this.filtrateTasks.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.calculateTasks = this.calculateTasks.bind(this);
        this.checkOneTask = this.checkOneTask.bind(this);
    }

    /**
     * filter = {
     *     filterBy => project
     *     value => projectValue
     * }
     * @param filter
     */
    filtrateTasks(filter) {
        console.log('filter');
        console.log(filter);
        let tasks = this.state.tasks;
        if(!filter) {
            filter = this.state.filter;
        }
        if(filter !== true) {
            tasks = tasks.filter(function(task, index) {
                if(task[filter['filterBy']] == filter['value']) {
                    return task;
                }
            });
            this.setState({
                filter : {
                    'filterBy' : filter['filterBy'],
                    'value'    : filter['value']
                }
            })
        }
        if(filter === true) {
            this.setState({
                filter : false
            });
        }
        this.setState({
            filteredTasks : tasks
        }, () => {
            this.calculateTasks();
        });
    }

    addTask(task) {
        this.setState({tasks : [...this.state.tasks, task]},
        () => {
            this.filtrateTasks();
        });
        return true;
    }

    removeTask(index) {
        this.setState({
            tasks : this.state.tasks.filter(function(task, i) {
                return i !== index;
            })
        }, () => {
            this.filtrateTasks();
        });
    }

    checkOneTask(taskKey, checked) {
        let tasks = this.state.tasks;
        if(checked === true) {
            tasks[taskKey].is_done = true;
        } else {
            tasks[taskKey].is_done = false;
        }
        this.setState({
            tasks : tasks
        }, () => {
            this.filtrateTasks();
        });
    }

    calculateTasks() {
        let allTasksNumber = this.state.filteredTasks.length;
        let doneTasksNumber = this.state.filteredTasks.filter(function(task){
            if(task !== undefined) {
                return task.is_done === true;
            }
        }).length;
        let notDoneTasksNumber = allTasksNumber - doneTasksNumber;
        this.setState({
            tasksNumber : allTasksNumber,
            doneTasksNumber : doneTasksNumber,
            notDoneTasksNumber : notDoneTasksNumber
        });
    }

    render() {
        return (
            <div className="taskBoard">
                <div className="row bbgray">
                    <div className="col-md-3 nopadding"></div>
                    <div className="col-md-9 nopadding">
                        <Todoform onAddTask={this.addTask} />
                    </div>
                </div>
                <div className="tasksWrapper row">
                    <div className="col-md-3 brgray nopadding">
                        <Projectlist tasks={this.state.tasks} doFiltrate={this.filtrateTasks} />
                    </div>
                    <div className="col-md-9 nopadding">
                        <Todoheader
                            taskNumber={this.state.tasksNumber}
                            doneTaskNumber={this.state.doneTasksNumber}
                            notDoneTaskNumber={this.state.notDoneTasksNumber}
                            onRemoveTask={this.removeTask}
                        />
                        <Todolist
                            onRemoveTask={this.removeTask}
                            onCheckDoneTask={this.checkOneTask}
                            tasks={this.state.filteredTasks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;