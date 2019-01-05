import React from 'react';
import YourTown from './towns/YourTown';
import DeliveryMethods from './delivery/DeliveryMethods';


/**
 * 1. От города зависят методы доставки - методы доставки должны храниться на сервере,
 * вся логика хранится на сервере.
 *
 *
 *
 */

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTown : false,
            deliveryMethod : false,
        }
    }

    render() {
        return (
            <div>
                <YourTown
                    selectedTown={this.state.selectedTown}
                    onTownSelect={this.onTownSelect}
                />
                <DeliveryMethods
                    deliveryMethod={this.deliveryMethod}
                    onDeliveryMethodSelect={this.onDeliveryMethodSelect}
                 />
            </div>
        );
    }

    onTownSelect = (name) => {
        this.setState({
            selectedTown : name
        });
    };

    onDeliveryMethodSelect = (id) => {
        this.setState({
            deliveryMethod : id
        });
    };
}

export default App;