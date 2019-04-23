import  React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component
{

    render() {

        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={css(styles.breadBottom)}></div>;
                break;
            case ('bread-top'):
                ingredient = (<div className={css(styles.breadTop)}>
                    {/*<div className={css(styles.seeds1)}></div>*/}
                    {/*<div className={css(styles.seeds2)}></div>*/}
                </div>);
                break;
            case('meat'):
                ingredient = <div className={css(styles.meat)}></div>;
                break;
            case('salad'):
                ingredient = <div className={css(styles.salad)}></div>;
                break;
            case('cheese'):
                ingredient = <div className={css(styles.cheese)}></div>;
                break;
            case('bacon'):
                ingredient = <div className={css(styles.bacon)}></div>;
                break;

            default:
                ingredient = null;
        }


    return ingredient;

}
}

BurgerIngredient.propTypes = {

    type: PropTypes.string.isRequired
};


export default BurgerIngredient;

const styles = {

    breadBottom: {
        height: '13%',
        width: '80%',
        background: 'linear-gradient(#f08e4a, #e27b36)',
        borderRadius: '0 0 30px 30px',
        boxShadow: 'inset -15px 0 #c15711',
        margin: '2% auto'
    },
    breadTop: {
        height: '20%',
        width: '80%',
        background: 'linear-gradient(#bc581e, #e27b36)',
        borderRadius: '50% 50% 0 0',
        boxShadow: 'inset -15px 0 #c15711',
        margin: '2% auto'



    },
    // seeds1: {
    //     width: '10%',
    //     height: '15%',
    //     position: 'absolute',
    //     backgroundColor: 'white',
    //     left: '30%',
    //     top: '50%',
    //     borderRadius: '40%',
    //     transform: 'rotate(-20deg)',
    //     boxShadow: 'inset -2px -3px #c9c9c9'
    //
    // },
    // seeds2: {
    //     content: '',
    //     width: '100%',
    //     height: '100%',
    //     position: 'absolute',
    //     backgroundColor: 'white',
    //     left: '-170%',
    //     top: '-260%',
    //     borderRadius: '40%',
    //     transform: 'rotate(60deg)',
    //     boxShadow: 'inset -1px 2px #c9c9c9'
    //
    // },
    meat: {
        width: '80%',
        height: '8%;',
        background: 'linear-gradient(#7f3608, #702e05)',
        margin: '2% auto',
        borderRadius: '15px'

    },
    bacon: {
        width: '80%',
        height: '3%',
        background: 'linear-gradient(#bf3813, #c45e38)',
        margin: '2% auto'


    },
    cheese: {
        width: '90%',
        height: '4.5%',
        margin: '2% auto',
        background: 'linear-gradient(#f4d004, #d6bb22)',
        borderRadius: '20px'


    },
    salad: {
        width: '85%',
        height: '7%',
        margin: '2% auto',
        background: 'linear-gradient(#228c1d, #91ce50)',
        borderRadius: '20px'

    }
};

