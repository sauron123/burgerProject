import React from 'react';
import burgerLogo from '../../assets/images/burgerLogo.jpg';
import { css } from 'emotion';


const logo = (props) => (

    <div className={css(logoStyle)} style={{height: props.height}}>

        <img className={css(imagStyle)} src={burgerLogo} alt="MyBurger" />
    </div>


);

export default logo;


const logoStyle ={
    backgroundColor: 'white',
    padding: '8px',
    height: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px'

};

const imagStyle ={

    height: '100%'
};