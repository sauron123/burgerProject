import React from 'react';
import { css } from 'emotion';


const backdrop = (props) => {

    return props.show ?
        <div className={css(backdropStyle)} onClick={props.clicked}> </div> : null


};


export default backdrop;

const backdropStyle = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '100',
    left: '0',
    top: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'

};