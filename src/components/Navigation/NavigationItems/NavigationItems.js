import React from 'react';
import { css } from 'emotion';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';



const navigationItems =() => (

    <ul className={css(itemsStyle)}>
        <NavigationItem link="/"> Burger Builder</NavigationItem>
        <NavigationItem link="/"> Checkout Page </NavigationItem>
    </ul>
);




export default navigationItems;


const itemsStyle ={
   margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',

};