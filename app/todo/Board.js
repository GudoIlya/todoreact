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
            tasks : []
        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.calculateTasks = this.calculateTasks.bind(this);
        this.checkOneTask = this.checkOneTask.bind(this);
    }

    addTask(task) {
        console.log(task);
        this.setState({tasks : [...this.state.tasks, task]},
            () => {
            this.calculateTasks()
        });
        return true;
    }

    removeTask(index) {
        this.setState({
            tasks : this.state.tasks.filter(function(task, i) {
                return i !== index;
            })
        }, () => {
            this.calculateTasks();
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
            this.calculateTasks();
        });
    }

    calculateTasks() {
        let allTasksNumber = this.state.tasks.length;
        let doneTasksNumber = this.state.tasks.filter(function(task){
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
                <div className="row mb20">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <Todoform onAddTask={this.addTask} />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <Projectlist tasks={this.state.tasks} />
                    </div>
                    <div className="col-md-9">
                        <Todoheader
                            taskNumber={this.state.tasksNumber}
                            doneTaskNumber={this.state.doneTasksNumber}
                            notDoneTaskNumber={this.state.notDoneTasksNumber}
                            onRemoveTask={this.removeTask}
                        />
                        <Todolist
                            onRemoveTask={this.removeTask}
                            onCheckDoneTask={this.checkOneTask}
                            tasks={this.state.tasks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;