import React, {useState} from "react"
import { nanoid } from 'nanoid'
import { ContactsList } from "./phoneBook/phoneBookList"
import { Form } from "./Form/form"
import { Filter } from "./Filter/filter"
import useLocaleStorage from '../hook/useLocal'

export const App =()=> {
  const [contacts, setContacts] = useLocaleStorage('contacts',[]);
  const [filter,setFilter]=useState('')

  const addContact= (name, number) => {
    const reviewName =contacts.some((contact) => contact.name === name);
    if (reviewName) {
      return alert(`${name} is already in contacts.`);
    }
    const todo = {
      id: nanoid(),
      name,
      number
    }
    return setContacts(prevState => 
      [ todo,...prevState]
    )
  }

  const handleFilter = (e) => {
    const{value}= e.currentTarget
    setFilter(value);
  }

  const workFilter = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    console.log(filteredContacts)
    return filteredContacts;
   };
  const deleteContact = (contactId) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }

  
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onAddContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilter}/>
        <ContactsList contacts={workFilter()} onClick={deleteContact} />
      </div>
  )
  
};
