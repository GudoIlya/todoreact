import React  from 'react';
import TornadoHead from '../tornadohead/TornadoHead';
import TornadoBoard from '../tornadoboard/TornadoBoard';

class Tornado extends React.Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <div>
                <TornadoHead />
                <TornadoBoard questions={this.props.questions} />
            </div>
        );
    }
}

export default Tornado;