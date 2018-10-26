import React from 'react';

class Projectheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectnumber : this.props.projects ? Object.keys(this.props.projects).length : 0
        }
    }

    render() {
        return (
            <div className="project-header">
                <h5>Проекты ({this.state.projectnumber})</h5>
            </div>
        );
    }
}

export default Projectheader;