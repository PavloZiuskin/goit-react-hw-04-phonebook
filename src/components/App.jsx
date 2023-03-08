import React, { Component, } from "react"
import { nanoid } from 'nanoid'
import { ContactsList } from "./phoneBook/phoneBookList"
import { Form } from "./Form/form"
import { Filter } from "./Filter/filter"


const INITIAL_VALUE =[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
export class App extends Component {
  state = {
    contacts: [
    ],
    filter:''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(savedContacts)
    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts })
      return;
    }
    
    this.setState({contacts: INITIAL_VALUE})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  addContact = data => {
    const { name, number } = data
    const reviewName = this.state.contacts.some((contact) => contact.name === name);
    if (reviewName) {
      return alert(`${name} is already in contacts.`);
    }
    const todo = {
      id: nanoid(),
      name,
      number
    }
    this.setState(prevState => (
      {contacts: [...prevState.contacts, todo]}
    ))
  }
  handleFilter = (e) => {
    const{value}= e.currentTarget
    this.setState({ filter: value });
  }
   workFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contast =>
      contast.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
   };
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return (contact.id !== contactId)
        
    })}))
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter}/>
        <ContactsList contacts={this.workFilter()} onClick={this.deleteContact} />
      </div>
  )
  }
};
