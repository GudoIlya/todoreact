import React from 'react';

class Projectheader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className="project-header bbgray">
                <h5 onClick={function() {me.props.doFiltrate(true);} }>Проекты ({this.props.projects ? Object.keys(this.props.projects).length : 0})</h5>
            </div>
        );
    }
}

export default Projectheader;