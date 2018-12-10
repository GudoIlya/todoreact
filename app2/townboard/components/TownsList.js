import React from 'react';

const TownList = ({ towns, onTownClick }) => (
    <div className="town-list">
        {towns.map((town,index) => (
          <Town key={index} {...town} onClick={() => onTownClick(index)} />
        ))}
    </div>
)
