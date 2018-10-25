import React from 'react';

class Todoform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task : '',
            is_done : false
        };
        this.initialState = this.initialState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    initialState() {
        console.log('initState');
        this.setState = ({
            task : '',
            is_done : false
        });
    }

    handleChange(event) {
        this.setState({task : event.target.value});
    }

    handleSubmitForm(event) {
        const task = Object.assign({},this.state);
        if(this.props.onAddTask(task)) {
            //this.initialState();
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <form className="form-inline" onSubmit={this.handleSubmitForm}>
                    <div className="form-group">
                        <div className="col-md-7">
                            <input name="task" type="text" className="form-control" value={this.state.task}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-3">
                            <input className="btn btn-success" type="submit" value="Добавить"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default Todoform;