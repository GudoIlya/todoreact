import React from 'react';
import TownList from './TownList';

class YourTown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            townListOpen : false
        };
    }

    render() {
        const {selectedTown, ...props} = this.props;
        var text = selectedTown !== false ? 'Ваш город - ' + selectedTown : 'Город еще не выбран';
        return (
            <div>
                <span onClick = {() => this.toggleTownList(true)}>
                    {text}
                </span>
                <TownList selectedValue={selectedTown} open={this.state.townListOpen} onClose={this.onTownSelect} />
            </div>
        );
    }

    onTownSelect = (name) => {
        this.props.onTownSelect(name);
        this.toggleTownList(false);
    };

    toggleTownList = (value) => {
        this.setState({
            townListOpen : value
        })
    }
}

export default YourTown;