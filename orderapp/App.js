import React from 'react';
import YourTown from './towns/YourTown';


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTown : 'Белгород'
        }
    }

    render() {
        return (
            <div>
                <YourTown
                    selectedTown={this.state.selectedTown}
                    onTownSelect={this.onTownSelect}
                />
            </div>
        );
    }

    onTownSelect = (name) => {
        this.setState({
            selectedTown : name
        });
    }
}

export default App;