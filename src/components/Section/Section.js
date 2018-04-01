import React from 'react';

const Section = ({icon, title, children}) => (
    <div className="Section">
        <div className="Section-Header">
            <div className="Section-Icon">
                <i class={icon}></i>
            </div>
            <div className="Section-Title">{title}</div>
        </div>
        <div className="Section-Content">
            {children}
        </div>
    </div>
) 

export default Section;

