import React from 'react';

const Text = ({children, type}) => (<p className={type? `Text Text-${type}` : 'Text'}> {children} </p>)

export default Text;

