import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
  
        const ingredientSummary = Object.keys(props.ingredients)
            .map(ing =>{
                return (
                    <li key = {ing}>
                        <span style = {{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]}
                    </li>)
            });
    return (        
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
    <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType = "Danger" clicked = {props.purchaseCanceled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}
