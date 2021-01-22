import React from'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    // This component could be a function component, we do here class component just to test this lifecycle hooks.
    // componentDidUpdate() {
    //     console.log('[Order Summary] WiillUpdate'); //this will run whenever we re-render our project EX:when we add any Ingredients
    // }

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <Aux>     
            <h3>Your Oder</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul> {ingredientSummary} </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to  Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;