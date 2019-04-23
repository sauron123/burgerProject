import React from 'react';
import { css } from 'emotion';
import BuildControl from './BuildControl/BuildControl';

const controls = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}


];

const buildControls = (props) => (

    <div className={css(style)}>
        <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>

        {controls.map( ctl => (

            <BuildControl key={ctl.label}
                          label={ctl.label}
                            added={() => props.ingredientAdded(ctl.type)}
                            removed={() => props.ingredientRemoved(ctl.type)}
                            disabled={props.disabled[ctl.type]}/>
        ))}
        <button className={css(buttonStyle)}
                onClick={props.ordered}
        disabled={!props.purchasable}>
            ORDER NOW </button>

    </div>


);

export default buildControls;


const style = {

    width: '100%',
    backgroundColor: '#CF8F3E',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 1px #CCC',
    margin: 'auto',
    padding: '0 10px'

};

const buttonStyle = {

    display: 'block',
    font: 'inherit',
    padding: '5px',
    margin: '0 5px',
    width: '80px',
    border: '1px solid #aa6817',
    cursor: 'pointer',
    outline: 'none'
    };
