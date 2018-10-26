import React from 'react';

class Projectitem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="project-item">
                <span>{this.props.project.projectKey} ({this.props.project.number})</span>
            </div>
        );
    }
}

export default Projectitem;