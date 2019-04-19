import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
   state = {
      orderForm: {
         name: {
            elementType: 'input',
            elementConfig: {
               type: 'text',
               placeholder: 'Your name'
            },
            value: ''
         },

         street: {
            elementType: 'input',
            elementConfig: {
               type: 'text',
               placeholder: 'Your street'
            },
            value: '',
         },

         zipCode: {
            elementType: 'input',
            elementConfig: {
               type: 'text',
               placeholder: 'Your zipcode'
            },
            value: ''
         },
         
         country: {
            elementType: 'input',
            elementConfig: {
               type: 'text',
               placeholder: 'Your country'
            },
            value: ''
         },

         email: {
            elementType: 'input',
            elementConfig: {
               type: 'email',
               placeholder: 'Your email'
            },
            value: ''
          },
         
         deliveryMethod: {
            elementType: 'select',
            elementConfig: {
               options: [
                  {value: 'fastest', displayValue: 'Fastest'},
                  {value: 'cheapest', displayValue: 'Cheapest'},
                  {value: 'fastest', displayValue: 'Fastest'},
               ]
            },
            value: ''
         }
      },
      loading: false,
   }

   orderHandler = (evt) => {
      evt.preventDefault();

      this.setState({ loading: true })
      const order = {
         ingredients: this.props.ingredients,
         price: this.props.price,
      }

      axios.post('/orders.json', order)
         .then(response => {
            this.setState({ loading: false });
            this.props.history.push('/');
         })
         .catch(err => {
            this.setState({ loading: false });
         });
   }

   render() {
      let form = (
         <form>
            <Input elementType="..." elementConfig="..." value="..." />
            <Input inputtype="input" type="email" name="email" placeholder="Your email" />
            <Input inputtype="input" type="text" name="street" placeholder="Your street" />
            <Input inputtype="input" type="text" name="postcode" placeholder="Your postcode" />
            <Button buttonType="Success" clicked={this.orderHandler}>Order</Button>
         </form>);

      if (this.state.loading) {
         form = <Spinner />;
      }

      return (
         <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
         </div>
      );
   }
}

export default ContactData;