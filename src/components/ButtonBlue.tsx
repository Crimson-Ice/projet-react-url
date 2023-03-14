import React from 'react';

const ButtonBlue = (
    {text, width, height, borderRadius, fontSize}:
    {text: string, width:number, height:number, borderRadius:number, fontSize:number}
) => {
    const styleButton = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        fontSize: fontSize,
    }

    return <button className="button-blue" style={styleButton}>{text}</button>;
};

export default ButtonBlue;
