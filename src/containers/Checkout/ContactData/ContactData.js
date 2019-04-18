import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
   state = {
      name: '',
      email: '',
      address: {
         street: '',
         postCode: ''
      }
   }

   render() {

      return(
         <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            <form>
               <input className={classes.Input} type="text" name="name" placeholder="Your name" />
               <input className={classes.Input} type="email" name="email" placeholder="Your email" />
               <input className={classes.Input} type="text" name="street" placeholder="Your street" />
               <input className={classes.Input} type="text" name="postcode" placeholder="Your postcode" />
               <Button buttonType="Success">Order</Button>
            </form>
         </div>
      );
   }
}

export default ContactData;