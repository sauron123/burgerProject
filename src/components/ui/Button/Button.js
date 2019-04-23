import React from 'react';
import { css } from 'emotion';


const button = (props) => {

    let klass = { ...ButtonStyle };

    if ((props.btntypes) === "Success" ) { ButtonStyle.color = Success.color}
    else
    { ButtonStyle.color = Danger.color}

    return (
    <button  className={css(klass)} onClick={props.clicked} >
        {props.children}
    </button>
    )};

export default button;



const ButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
    font: 'inherit',
    padding: '10px',
    margin: '10px',
    fontWeight: 'bold'
};

// .Button:first-of-type {
//     margin-left: 0;
//     padding-left: 0;
// }

const Success  = {
    color: '#5c9210'
};

const Danger = {
    color: '#944317'
};


