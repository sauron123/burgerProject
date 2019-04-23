import React from 'react';
import { css } from 'emotion';
import  Aux from '../../../HOC/Aux';
import Backdrop from '../Backdrop/Backdrop'



const modal  = (props) => (

<Aux>
<Backdrop show = {props.show} clicked = {props.modalClosed}/>
    <div
        className={css(modalStyle)}
    style ={{

        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}
    >

        {props.children}

    </div>
</Aux>
);

export default modal;



const modalStyle = {
    position: 'fixed',
    zIndex: '500',
    backgroundColor: 'white',
    width: '70%',
    border: '1px solid #ccc',
    boxShadow: '1px 1px 1px black',
    padding: '16px',
    left: '15%',
    top: '30%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease-out',

    '@media only screen and (max-width: 600px)' : {

        width: '500px',
        left: 'calc(50% - 250px)'
    }
};
