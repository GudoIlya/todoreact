import React from 'react';

class Todoheader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const totalTasks = this.props.taskNumber || 0;

        return (
            <div className="todoHeader">
                <h5>Всего задач - {totalTasks} (<span title="Всего выполнено">{this.props.doneTaskNumber || 0}</span> / <span title="Не выполнено">{this.props.notDoneTaskNumber || 0})</span></h5>
            </div>
        );
    }
}

export default Todoheader;