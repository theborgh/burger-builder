import React from 'react';
import classes from './Logo.css'
import logoImg from '../../assets/images/burger-logo.png'

const logo = props => (
   <div className={classes.Logo}>
      <img src={logoImg} alt="Burger Builder" />
   </div>
);

export default logo;