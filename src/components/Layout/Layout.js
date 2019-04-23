import React from 'react';
import Aux from '../../HOC/Aux';
import {css} from 'emotion';

const layout = (props) => (

    <Aux>
        <div>Toolbar,sideDrawer,Backdrop</div>
        <main className={css(styleMain)}>

            {props.children}
        </main>

    </Aux>
);

export default layout;

const styleMain = {
    marginTop: '16px',
};