import React from 'react';
import classnames from 'classnames';

const Editable = ({editing, value, onEdit, className, ...props}) => {
    if(editing) {
        return <Editable.Edit className={className} value={value} onEdit={onEdit} {...props} />;
    }

    return <Editable.Value className={className} value={value} />
};

Editable.Value = ({value, className, ...props}) => <span className={classnames('value', className)} {...props}>{value}</span>

class Edit extends React.Component {
    render() {
        const {value, onEdit, className, ...props} = this.props;

        return <input
            className={classnames('edit', className)}
            type="text"
            autoFocus={true}
            defaultValue={value}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
            {...props} />;
    }

    checkEnter = (e) => {
        if(e.key === 'Enter') {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        const value = e.target.value;

        if(this.props.onEdit) {
            this.props.onEdit(value);
        }
    };

}

Editable.Edit = Edit;

export default Editable;