import React from 'react';


const Button = ({btnText, isClicked, reference}) => {
    return <button onClick={isClicked} value={reference}>{btnText}</button>
}

export default Button;