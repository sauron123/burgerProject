import React from 'react';
import { css } from 'emotion';
import Logo from '../../Logo/Logo';
import  NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/DrawerToggle/SideDrawerToggle'


const toolbar = (props) => (

    <header className={css(toolbarSTYLE)}>

      <SideDrawerToggle clicked = {props.drawerToggleClicked}/>
        <Logo/>
        <nav>
        <NavigationItems/>
        </nav>
    </header>
);

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

