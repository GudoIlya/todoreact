import React from 'react';
import classnames from 'classnames';

const Town = (name, numberOfPickPoints) => {
    let pickPointsClass = numberOfPickPoints > 0 ? 'with-pick-points' : 'noPickPoints';

    return (
        <div className={classnames("town-item", pickPointsClass)}>
            {name} - {numberOfPickPoints}
        </div>
    )
};
