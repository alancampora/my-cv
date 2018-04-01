import React from 'react';

const HeaderMain = ({photo, title, subtitle}) => (
    <div className="HeaderMain">
       <div className="HeaderMain-Photo"> 
            <img src={photo}/>
       </div>
       <div className="HeaderMain-Titles"> 
            <div className="HeaderMain-Title">{title}</div>
            <div className="HeaderMain-Subtitle">{subtitle}</div>
       </div>

    </div>
) 

export default HeaderMain;
