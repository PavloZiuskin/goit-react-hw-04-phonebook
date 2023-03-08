import { Component } from "react";
import PropTypes from 'prop-types';
import {FormSt,Label} from "components/Form/form.styled"

export class Form extends Component{
    state = {
          name: '',
          number: ''
  }
  handleChange = (e)=> {
    const { name,value} = e.currentTarget
    this.setState({[name]: value})
  
  }
  handleSubmit = (e) => {
    e.preventDefault()
      this.props.onSubmit(this.state)
    this.resetForm()

  }
  resetForm() {
    this.setState({
        name: '',
        number:''})
  }
      render() {
    const {  name,number } = this.state;
    return (
      
    
        
        <FormSt onSubmit={this.handleSubmit}>
          <Label >Name
              <input
                onChange={this.handleChange}
              type="text"
                name="name"
                value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required/>
                </Label>
                <Label >Number
                    <input
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required/>
          </Label>
          <button type="submit">Add contacts</button>
        </FormSt>
      
      
  )
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}