import React from "react";
import { css } from 'emotion';


const navigationItem = (props)  => (



        <li className={css(itemStyle)}> <a className={css(aStyle)} href={props.link} > {props.children}</a> </li>

);



export default navigationItem;

const itemStyle = {

    margin: '0',
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    alignItems: 'center',

    '@media (min-width: 500px)': {
    margin: '10px 0',
    display: 'block',
    width: '100%'
},
};

const aStyle = {
    color: '#000000',
    textDecoration: 'none',
    height: '100%',
    padding: '16px 10px',
    borderBottom: '4px solid transparent',
    boxSizing: 'border-box',
    display: 'block',
    '&:hover': {
        backgroundColor: '#8F5CC2C',
        borderBottom: '4px solid #40A4C8',
        color: 'white'
    },

    '@media (min-width: 500px)': {
            color: '#000000',
            textDecoration: 'none',
            boxSizing: 'border-box',
            display: 'block'
    }

};