import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
   state = {
      name: '',
      email: '',
      address: {
         street: '',
         postCode: ''
      },
      loading: false,
   }

   orderHandler = (evt) => {
      evt.preventDefault();

      this.setState({loading: true})
      const order = {
         ingredients: this.props.ingredients,
         price: this.props.price,
         customer: {
            name: 'Pippi Longbow',
            address: {
               street: 'Infinite Loop 1',
               zipCode: '24213',
               country: 'Neverland',
            },
            email: 'test@test.com',
         },
         deliveryMethod: 'fastest'
      }

      axios.post('/orders.json', order)
         .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
         })
         .catch(err => {
            this.setState({loading: false});
         });
   }

   render() {
      let form = (            
      <form>
         <input className={classes.Input} type="text" name="name" placeholder="Your name" />
         <input className={classes.Input} type="email" name="email" placeholder="Your email" />
         <input className={classes.Input} type="text" name="street" placeholder="Your street" />
         <input className={classes.Input} type="text" name="postcode" placeholder="Your postcode" />
         <Button buttonType="Success" clicked={this.orderHandler}>Order</Button>
      </form>);

      if (this.state.loading) {
         form = <Spinner />;
      }

      return(
         <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
         </div>
      );
   }
}

export default ContactData;