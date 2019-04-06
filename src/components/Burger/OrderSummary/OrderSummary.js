import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux';

class OrderSummary extends Component {

   render () {
      const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(ingr => <li key={ingr}><span style={{textTransform: "capitalize"}}>{ingr}:</span> {this.props.ingredients[ingr]}</li>)

      return (
         <Aux>
            <h3>Your burger:</h3>
            <ul>
               {ingredientsSummary}
            </ul>
            <p><strong>${this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType="Danger" clicked={this.props.cancel}>Cancel</Button>
            <Button buttonType="Success" clicked={this.props.continue}>Continue</Button>
         </Aux>
      )
   }
}

export default OrderSummary;