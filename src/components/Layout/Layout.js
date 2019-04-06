import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = props => {
   return (
      <Aux>
         <Toolbar />
         <SideDrawer />
         <div>Backdrop</div>
         <main className={classes.Content}>
            {props.children}
         </main>
      </Aux>
   )
}

export default layout;