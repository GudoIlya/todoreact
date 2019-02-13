import React from 'react';
import Todoitem from './Todoitem';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todoList">
                {this.props.tasks.length ?
                    this.props.tasks.map((task, i) => {
                    return (<Todoitem key={i} taskIndex={i} task={task}
                                      onRemoveTask={this.props.onRemoveTask}
                                      onCheckDoneTask={this.props.onCheckDoneTask}
                    />)
                }) : 'Создай задачу!'}
            </div>
        );
    }

}

export default Todolist;