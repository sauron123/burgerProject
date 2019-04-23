import React from 'react';
import Aux from '../../../HOC/Aux';
import Button from '../../../components/ui/Button/Button';


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
            <p> <strong> Total price : {props.price} </strong></p>
            <p> Continue to Checkout ? </p>

            <Button btntypes="Success" clicked= {props.purchaseCancelled}>  CANCEL </Button>
            <Button btntypes="Danger" clicked={props.purchaseContinued}> CONTINUE  </Button>
        </Aux>
    )
};


export default orderSammury