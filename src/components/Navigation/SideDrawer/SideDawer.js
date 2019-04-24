import React from 'react';
import { css } from 'emotion';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../ui/Backdrop/Backdrop';
import Aux from '../../../HOC/Aux';



const sideDrawer =(props) => {

    return(
    <Aux>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={css(sideDrawerStyle)}>
            <Logo height="11%"/>
            <nav>
        <NavigationItems/>
            </nav>
        </div>
    </Aux>

    );
};

export default sideDrawer;


const sideDrawerStyle = {

    position: 'fixed',
    width: '280px',
    maxWidth: '70%',
    height: '100%',
    left: '0',
    top: '0',
    zIndex: '200',
    backgroundColor: 'white',
    padding: '32px 16px',
    boxSizing: 'borer-box',
    transition: 'transform 0.3s ease-out',
    '@media (min-width: 500px)': {
        display: 'none'
    },
    '&:open': {
        transform: 'translateX(0)'
    },
    '&:close': {
        transform: 'translateX(-100%)'
    }
};