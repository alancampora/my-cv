import React from 'react';

const BubbleData = ({company, position, description, date}) => (
    <div className="BubbleData">
        <div className="BubbleData-Header">
            {' '}
            {date.from} - {date.to} : {position} @ {company}
        </div>
        <div className="BubbleData-Description">{description} </div>
    </div>
);

export default BubbleData;
