import React from 'react';
import BubbleData from '../BubbleData/BubbleData';
import Text from '../Text/Text';

let Experience = ({ description }) => description.map((experience, index) => (

    <BubbleData key={index} company={experience.company}
        date={experience.date} position={experience.position} photo={experience.photo}>

        { experience.description.lines.map((line, index) =>
            <Text index={index} type="Paragraph"> {line} </Text>
        )}

    </BubbleData>
))

export default Experience;