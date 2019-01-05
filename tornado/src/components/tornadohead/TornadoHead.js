import React from 'react';

class TornadoHead extends React.Component {

    render = () => {
        return (
            <div className="tornadoHead">
                <div className="row">
                    <div className="col-md-2">
                        <img src="no-image.jpeg" alt=""/>
                    </div>
                    <div className="col-md-10">
                        <h3>Tornado</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default TornadoHead;