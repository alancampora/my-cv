import React, {Component} from 'react';
import Text from '../Text/Text';

const IconText = ({img,value}) => (
    <div className="IconText">
       <img className="IconText-Img" src={img}></img>
       <Text type="Data">{value}</Text>
    </div>
)

export default IconText;