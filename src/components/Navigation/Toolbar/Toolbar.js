import React from 'react';
import { css } from 'emotion';
import Logo from '../../Logo/Logo';


const toolbar = (props) => (

    <header className={css(toolbarSTYLE)}>

        <div> MENU</div>
        <Logo/>
        <nav>

            ...
        </nav>
    </header>




)

export default toolbar;


const toolbarSTYLE ={
    height: '56px',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#703B09',
    display: 'flex',
    justifyContent: 'soace-between',
    alignItems: 'center',
    padding: 'border-box',
    zIndex: '90',
};

