import React from 'react';

const Left = ({description, photo}) => (
    <div class="Left">
        <div className="Left-PhotoContainer">
            <img src={photo} />
        </div>
        <div className="Left-Description">{description}</div>
    </div>
);

export default Left;
