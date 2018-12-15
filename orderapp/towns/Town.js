import React from 'react';

const Town = ({ name, onTownClick }) => {
        return (
            <div onClick ={() => onTownClick(name)}>
                <span>{name}</span>
            </div>
        );
};

export default Town;
