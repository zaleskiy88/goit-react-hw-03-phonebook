import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsForm,
  ContactsList,
  ContactsFilter,
  AppContainer,
} from 'index';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedNameValue = name.toLowerCase();
    const normalizedNamesArr = contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (normalizedNamesArr.includes(normalizedNameValue)) {
      alert(`${name} is already in the list`);
      return false;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, { id: nanoid(), name, number }],
      }));
      return true;
    }
  };

  inputHandler = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilterValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount = () => {
    if (localStorage.getItem('contacts')) {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);

      this.setState({ contacts: parsedContacts });
    }

    localStorage.setItem('contacts', []);
  };

  componentDidUpdate = (prevProps, { contacts }) => {
    if (contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <AppContainer>
        <h2>Phonebook</h2>
        <ContactsForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <ContactsFilter inputHandler={this.inputHandler} />
        <ContactsList contacts={filteredContacts} onDelete={this.onDelete} />
      </AppContainer>
    );
  }
}
