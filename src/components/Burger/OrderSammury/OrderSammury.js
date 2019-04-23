import React from 'react';
import Aux from '../../../HOC/Aux';


const orderSammury = (props) => {

    const ingredientSammury = Object.keys(props.ingredients)
        .map((igKeys, index)  => {
            return (
                (<li key={igKeys + index }> <span  style={{textTransform: 'capitalize'}}> {igKeys} : </span> {props.ingredients[igKeys]}
                </li>)

            )});


    return (

        <Aux>

        <h3>
            Your Order
        </h3>
            <p>
                A delicious burger with the following ingredients :
            </p>

            <ul>
                {ingredientSammury}
            </ul>
            <p> Continue to Checkout ? </p>

            <button>  CANCEL </button>
            <button> CONTINUE  </button>
        </Aux>
    )
};


export default orderSammury