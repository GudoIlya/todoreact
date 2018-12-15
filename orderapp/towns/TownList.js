import React from 'react';
import uuid from 'uuid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

class TownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            towns : [
                {
                    id :  uuid.v4(),
                    name : 'Белгород'
                },
                {
                    id : uuid.v4(),
                    name : 'Воронеж'
                }
            ]
        }
    }

    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleItemClick = value => {
        this.props.onClose(value);
    };

    handleNameInput = (event) => {
        let inputValue = event.target.value;
        console.log(inputValue);
    };

    render() {
        const {open, ...props} = this.props;
        return (
            <Dialog onClose={this.handleClose} open={open}>
                <DialogTitle id="simple-dialog-title">Выберите ваш город</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Искать город"
                        type="text"
                        fullWidth
                        onChange={this.handleNameInput}
                    />
                    <div>
                        <List>
                            {this.state.towns.map( ({id, name}) => (
                                    <ListItem button onClick={() => this.handleItemClick(name)} key={id}>
                                        <ListItemText primary={name} />
                                    </ListItem>
                                )
                            )
                            }
                        </List>
                    </div>
                </DialogContent>
             </Dialog>
        );
    }

};

/*

<div className={cls}>
                    {this.state.towns.map( ({id, name}) => <Town key={id} name={name} onTownClick = {onTownClick} /> )}
                </div>

 */

export default TownList;