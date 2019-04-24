import React, { Component} from 'react';
import Aux from '../../HOC/Aux';
import {css} from 'emotion';
import  Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };
    sideDrawerClosedHandler =() => {

        this.setState({showSideDrawer: false});

    };

    sideDrawerToggleHandler =() => {
      this.setState(( prevState ) =>
      {
          return {showSideDrawer: !prevState.showSideDrawer};
      }) ;


    };


    render() {
        return (
            <Aux>
                <div>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                </div>
                <main className={css(styleMain)}>

                    {this.props.children}
                </main>

            </Aux>
        )
    }
};

export default Layout;



const styleMain = {
    marginTop: '72px',
};