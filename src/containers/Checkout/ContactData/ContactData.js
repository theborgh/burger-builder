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
            value: '',
            validation: {
               required: true,
            },
            valid: false,
            touched: false
         },

         street: {
            elementType: 'input',
            elementConfig: {
               type: 'text',
               placeholder: 'Your street'
            },
            value: '',
            validation: {
               required: true,
            },
            valid: false,
            touched: false
         },

         zipCode: {
            elementType: 'input',
            elementConfig: {
               type: 'text',
               placeholder: 'Your zipcode'
            },
            value: '',
            validation: {
               required: true,
               minLength: 5,
               maxLength: 5
            },
            valid: false,
            touched: false
         },
         
         country: {
            elementType: 'input',
            elementConfig: {
               type: 'text',
               placeholder: 'Your country'
            },
            value: '',
            validation: {
               required: true,
            },
            valid: false,
            touched: false
         },

         email: {
            elementType: 'input',
            elementConfig: {
               type: 'email',
               placeholder: 'Your email'
            },
            value: '',
            validation: {
               required: true,
            },
            valid: false,
            touched: false
          },
         
         deliveryMethod: {
            elementType: 'select',
            elementConfig: {
               options: [
                  {value: 'fastest', displayValue: 'Fastest'},
                  {value: 'cheapest', displayValue: 'Cheapest'},
               ]
            },
            value: ''
         }
      },
      loading: false,
   }

   orderHandler = (evt) => {
      evt.preventDefault();
      this.setState({ loading: true });
      const formData = {};
      for (let formElementId in this.state.orderForm) {
         formData[formElementId] = this.state.orderForm[formElementId].value;
      }

      const order = {
         ingredients: this.props.ingredients,
         price: this.props.price,
         orderData: formData
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

   checkValidity(value, rules) {
      let isValid = true ;

      if (rules.required) {
         isValid = isValid && value.trim() !== '';
      }

      if (rules.minLength) {
         isValid = isValid && value.length >= rules.minLength;
      }

      if (rules.maxLength) {
         isValid = isValid && value.length <= rules.maxLength;
      }

      return isValid;
   }

   inputChangedHandler = (evt, inputId) => {
      const updatedOrderForm = {
         ...this.state.orderForm
      };
      const updatedFormElement = {
         ...updatedOrderForm[inputId]
      };
      updatedFormElement.value = evt.target.value;
      updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
      updatedFormElement.touched = true;
      updatedOrderForm[inputId] = updatedFormElement;
      this.setState({orderForm: updatedOrderForm});
   }

   render() {
      const formElements = [];
      for (let key in this.state.orderForm) {
         formElements.push({
            id: key,
            config: this.state.orderForm[key]
         });
      }

      let form = (
         <form onSubmit={this.orderHandler}>
            {formElements.map(formEl => (
               <Input 
                  key={formEl.id}
                  elementType={formEl.config.elementType}
                  elementConfig={formEl.config.elementConfig}
                  value={formEl.config.value}
                  invalid={!formEl.config.valid}
                  shouldValidate={formEl.config.validation}
                  touched={formEl.config.touched}
                  changed={(evt) => this.inputChangedHandler(evt, formEl.id)} />
            ))}
            <Button buttonType="Success">Order</Button>
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