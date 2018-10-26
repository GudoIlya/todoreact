import React from 'react';

class Todoitem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemoveButton = this.handleRemoveButton.bind(this);
        this.checkTask = this.checkTask.bind(this);
    }

    handleRemoveButton(event) {
        this.props.onRemoveTask(this.props.taskIndex);
        event.preventDefault();
    }

    checkTask(event) {
        this.props.onCheckDoneTask(this.props.taskIndex, event.target.checked);
    }

    render() {
        return (
            <div className="row todoItem">
                <div className="col-md-11 nopadding">
                    <div className="form-check">
                        <input id='item-{this.props.taskKey}' className="form-check-input" onChange={this.checkTask} type="checkbox" name="is_done" checked={this.props.task.is_done} />
                        <label className="form-check-label linecrossed" htmlFor="item-{this.props.taskKey}">{this.props.task.task}</label>
                    </div>
                </div>
                <div className="col-md-1 nopadding">
                    <button className="btn btn-danger" onClick={this.handleRemoveButton}>-</button>
                </div>
            </div>
        );
    }
}

export default Todoitem;