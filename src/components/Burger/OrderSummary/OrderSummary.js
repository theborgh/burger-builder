import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = props => {
   const ingredientsSummary = Object.keys(props.ingredients)
      .map(ingr => <li key={ingr}><span style={{textTransform: "capitalize"}}>{ingr}:</span> {props.ingredients[ingr]}</li>)
   return (
      <Aux>
         <h3>Your burger:</h3>
         <ul>
            {ingredientsSummary}
         </ul>
         <p>Continue to checkout?</p>
      </Aux>
   )
}

export default orderSummary;