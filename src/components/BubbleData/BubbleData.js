import React from 'react';

const BubbleData = ({company, position, description, date, photo}) => {
    let formattedDates = {
        from: new Date(date.from),
        to: new Date(date.to)
    };
    return (
        <div className="BubbleData">
            <div className="BubbleData-Left">
                <div className="BubbleData-Bubble" />
                <div className="BubbleData-Line" />
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
};

export default BubbleData;
