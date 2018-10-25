import React from 'react';
import Todoheader from './Todoheader';
import Todolist from './Todolist';

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
        console.log(taskKey);
        console.log(checked);
        let tasks = this.state.tasks;
        if(checked === true) {
            tasks[taskKey].is_done = true;
        } else {
            tasks[taskKey].is_done = false;
        }
        console.log(tasks);
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
                <Todoheader
                    taskNumber={this.state.tasksNumber}
                    doneTaskNumber={this.state.doneTasksNumber}
                    notDoneTaskNumber={this.state.notDoneTasksNumber}
                    onAddTask={this.addTask}
                    onRemoveTask={this.removeTask}
                />
                <Todolist
                    onRemoveTask={this.removeTask}
                    onCheckDoneTask={this.checkOneTask}
                    tasks={this.state.tasks}
                />
            </div>
        );
    }
}

export default Board;