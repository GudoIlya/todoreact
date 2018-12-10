import React from 'react';
import searchTown from '../actions';

const SearchTown = ({ onSubmit, onKeyPress, onClickButton, placeholder }) => {

    if(onClickButton === undefined) {
        onClickButton = onSubmit
    }

    return (
        <div>
            <form action="" onSubmit={
                (e) => {
                    e.preventDefault();
                    if(!towninput.value.trim()) {
                        return;
                    }
                    dispatch(searchTown(towninput.value));
                }
            }>
                <input type="text"
                       ref = { node => {
                            towninput = node
                        }
                       }
                />
                <button type="submit">Искать</button>
            </form>
        </div>
    );
};

export default SearchTown;