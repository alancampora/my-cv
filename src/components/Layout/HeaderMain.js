import React from 'react';
import IconText from '../IconText/IconText';
const HeaderMain = ({ photo, title, subtitle, data }) => (
    <div className="HeaderMain">
        <div className="HeaderMain-Photo">
            <img src={photo} />
        </div>
        <div className="HeaderMain-Titles">
            <div className="HeaderMain-Title">{title}</div>
            <div className="HeaderMain-Subtitle">{subtitle}</div>
        </div>

        <div className="HeaderMain-Data">
            {data.map((item, index) => <IconText key={index} {...item} />)}
        </div>

    </div>
)

export default HeaderMain;
