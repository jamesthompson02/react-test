import React from 'react';
import './style.css';

const Btn = ({text, handleClick, classname}) => {
    return (
        <button style={{marginLeft: "1rem", cursor: "pointer"}} onClick={handleClick}>{text}<div className={classname}></div></button>
    );
}

export default Btn;
