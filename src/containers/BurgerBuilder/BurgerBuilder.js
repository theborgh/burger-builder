import React from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends React.Component {
   state = {
      ingredients: {
         salad: 0,
         bacon: 1,
         cheese: 3,
         meat: 0
      }
   };

   render() {
      return (
         <Aux>
               <Burger ingredients={this.state.ingredients} />
            <div>
               Build controls
            </div>
         </Aux>
      );
   }

}

export default BurgerBuilder;