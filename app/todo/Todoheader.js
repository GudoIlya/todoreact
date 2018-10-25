import React from 'react';
import Todoform from './TodoForm';

class Todoheader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const totalTasks = this.props.taskNumber || 0;

        return (
            <div className="todoHeader">
                <h4>Всего задач - {totalTasks} (<span title="Всего выполнено">{this.props.doneTaskNumber || 0}</span> / <span title="Не выполнено">{this.props.notDoneTaskNumber || 0})</span></h4>
                <Todoform onAddTask={this.props.onAddTask} />
            </div>
        );
    }
}

export default Todoheader;