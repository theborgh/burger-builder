import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
   { label: 'Salad', type: 'salad'},
   { label: 'Bacon', type: 'bacon'},
   { label: 'Cheese', type: 'cheese'},
   { label: 'Meat', type: 'meat'},
];

const buildControls = props => {
   
   return (
      <div className={classes.BuildControls}>
         <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
         {controls.map((ctrl, i) => {
            return (
               <BuildControl
                  key={ctrl.label}
                  label={ctrl.label}
                  added={() => props.addedIngredient(ctrl.type)}
                  removed={() => props.removedIngredient(ctrl.type)}
                  disabled={props.isDisabled[ctrl.type]} />
            );
         })}
         <button className={classes.OrderButton} disabled={!props.canOrder}>Order now!</button>
      </div>

   )
}

export default buildControls;