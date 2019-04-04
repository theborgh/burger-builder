import React from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends React.Component {

   render() {
      return (
         <Aux>
               <Burger />
            <div>
               Build controls
            </div>
         </Aux>
      );
   }

}

export default BurgerBuilder;