import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   meat: 1.5,
   bacon: 0.7
}

class BurgerBuilder extends React.Component {
   state = {
      ingredients: {
         salad: 0,
         bacon: 1,
         cheese: 3,
         meat: 0
      },
      totalPrice: 2
   };

   addIngredientHandler = type => {
      const updatedCount = this.state.ingredients[type] + 1;
      const updatedIngredients = {
         ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
      this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
   }

   removeIngredientHandler = type => {

   }

   render() {
      return (
         <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
               addedIngredient={this.addIngredientHandler} />
         </Aux>
      );
   }

}

export default BurgerBuilder;