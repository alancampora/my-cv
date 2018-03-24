import React from 'react';

const BubbleData = ({company, position, description, date, photo}) => (
    <div className="BubbleData">
        <div className="BubbleData-Left">
            <div className="BubbleData-Photo">
                <img className="BubbleData-Photo-Img" src={photo} />
            </div>
        </div>

        <div className="BubbleData-Right">
            <div className="BubbleData-Header">
                {' '}
                {date.from} - {date.to} : {position} @ {company}
            </div>
            <div className="BubbleData-Description">{description} </div>
        </div>
    </div>
);

export default BubbleData;
