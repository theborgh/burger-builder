import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
   salad: 0.3,
   cheese: 0.4,
   meat: 1,
   bacon: 0.6
}

class BurgerBuilder extends React.Component {
   state = {
      ingredients: {
         salad: 0,
         bacon: 0,
         cheese: 0,
         meat: 0
      },
      totalPrice: 1.5,
      canOrder: false,
      orderButtonWasClicked: false,
   };

   updateCanOrder(ingredients) {
      const canOrder = Boolean(Object.values(ingredients)
         .reduce((acc, curr) => acc + curr, 0));

      this.setState({canOrder: canOrder});
   }

   addIngredientHandler = type => {
      const updatedCount = this.state.ingredients[type] + 1;
      const updatedIngredients = {
         ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
      this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
      this.updateCanOrder(updatedIngredients);
   }

   removeIngredientHandler = type => {

      const updatedCount = this.state.ingredients[type] > 0 ?
         this.state.ingredients[type] - 1 :
         0;
      const updatedIngredients = {
         ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
      this.updateCanOrder(updatedIngredients);
   }

   purchaseHandler = () => {
      this.setState({orderButtonWasClicked: true});
   }

   orderCancelHandler = () => {
      this.setState({orderButtonWasClicked: false});
   }

   render() {
      const lessButtonShouldBeDisabled = {...this.state.ingredients};
      for (let key in lessButtonShouldBeDisabled) {
         lessButtonShouldBeDisabled[key] = lessButtonShouldBeDisabled[key] <= 0;
      }

      return (
         <Aux>
            <Modal 
               show={this.state.orderButtonWasClicked} 
               modalClosed={this.orderCancelHandler}>
               <OrderSummary ingredients={this.state.ingredients} />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
               price={this.state.totalPrice}
               addedIngredient={this.addIngredientHandler}
               removedIngredient={this.removeIngredientHandler}
               isDisabled={lessButtonShouldBeDisabled}
               ordered={this.purchaseHandler}
               canOrder={this.state.canOrder} />
         </Aux>
      );
   }

}

export default BurgerBuilder;