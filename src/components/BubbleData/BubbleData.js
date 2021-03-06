import React from 'react';
import Text from '../Text/Text';

const BubbleData = ({at, role, photo, children, date}) => {
    let formattedDates = {
        from: new Date(date.from),
        to: new Date(date.to)
    };
    return (
        <div className="BubbleData">
            <div className="BubbleData-Header">
                <div className="CompanyPhoto">
                    <img src={photo}></img>
                </div>
                <div>
                    <Text type="Title">{role}</Text>
                    <Text type="Subtitle">{at}</Text>
                    <Text type="Subtitle">{date.from} - {date.to}</Text>
                </div>
            </div>
            <div className="BubbleData-Description">{children} </div>
        </div>
    );
};

export default BubbleData;
