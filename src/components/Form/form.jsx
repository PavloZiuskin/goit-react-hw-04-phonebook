import { useState } from "react";
import PropTypes from 'prop-types';
import {FormSt,Label} from "components/Form/form.styled"

export const Form =({onAddContact})=>{
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = (e)=> {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onAddContact(name,number)
    resetForm()
  }
  const resetForm = () => {
    setName('');
    setNumber('');
  }
      
    return (
      
    
        
        <FormSt onSubmit={handleSubmit}>
                <Label >Name
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
                </Label>
                <Label >Number
                    <input
                        onChange={handleChange}
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

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired
}