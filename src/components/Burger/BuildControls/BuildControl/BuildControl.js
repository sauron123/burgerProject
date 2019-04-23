import React  from 'react';
import { css } from 'emotion';

const buildControl = (props) => (

    <div className={css(styles.styleBuildControl)}>
        <div className={css(styles.labelStyle)}> {props.label}</div>
        <button className={css(styles.Less)} onClick={props.removed} disabled={props.disabled} >Less</button>
        <button className={css(styles.More)}  onClick={props.added}>More</button>


    </div>

);


export default buildControl;

const styles= {

    styleBuildControl: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px 0'

    },
    styleButton: {
    display: 'block',
    font: 'inherit',
    padding: '5px',
    },

    labelStyle: {
    padding: '10px',
    fontWeight: 'bold',
    width: '80px'
    },
    Less: {
        backgroundColor: '#d39952',
        color: 'white'
    },
    More: {
        backgroundColor: '#8f5e1e',
        color: 'white'
    }
};