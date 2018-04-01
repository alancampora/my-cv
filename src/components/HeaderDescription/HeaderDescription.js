import React from 'react';
import BubbleData from '../BubbleData/BubbleData';
import Text from '../Text/Text';

let Experience = ({ description }) => description.map((experience, index) => (

    <BubbleData key={index} at={experience.at}
        date={experience.date} role={experience.role} photo={experience.photo}>
        {
            experience.description 
            ? experience.description.lines.map((line, index) =>
                       <Text index={index} type="Paragraph"> {line} </Text>)
            :""
        }

    </BubbleData>
))

export default Experience;