import React from 'react';

class Projectitem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let me = this;
        return (
            <div className="project-item" onClick={function(event) {
                me.props.doFiltrate({
                    'filterBy': 'project',
                    'value': me.props.project.name
                });
            } }>
                <span>{this.props.project.name} ({this.props.project.number})</span>
            </div>
        );
    }
}

export default Projectitem;