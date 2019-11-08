import React from 'react';

export const Hello: React.FC<{ text: String }> = ({text}) => {
    return (<h1>{text}</h1>)
}