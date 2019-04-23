import React from 'react';
import { css } from 'emotion';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
           return [...Array(props.ingredients[igKey])].map((_,index) => {
console.log(<BurgerIngredient key={igKey + index} type={igKey}/>);
               return <BurgerIngredient key={igKey + index} type={igKey}/>


           });

        })
    .reduce((arr, el) => {
        return  arr.concat(el)
    } , []);
if (transformIngredients.length === 0) {
    transformIngredients = <p> Please start adding ingredients ! </p>
}

console.log(transformIngredients);
    return (
        <div className={css(burgerStyle)}>
            
        <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>

    );

};





export default burger;


const burgerStyle = {
    width: '100%',
    margin: 'auto',
    height: '250px',
    overflow: 'scroll',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',

    '@media only screen and (min-width: 1200px)': {
        width: '700px',
        height: '600px',
    },
    '@media only screen and (min-width: 768px)': {
        width: '400px',
        height: '400px',
    },
    '@media only screen and (max-width: 768px)': {
        width: '350px',
        height: '300px',
    },
}