import React from 'react';
import Aux from '../../HOC/Aux';
import {css} from 'emotion';
import  Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (

    <Aux>
        <div><Toolbar/> sideDrawer,Backdrop</div>
        <main className={css(styleMain)}>

            {props.children}
        </main>

    </Aux>
);

export default layout;

const styleMain = {
    marginTop: '72px',
};