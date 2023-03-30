import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createNewContact = currentValue => {
    const alreadyAdded = this.state.contacts.some(
      obj => obj.name === currentValue.name
    );
    alreadyAdded
      ? alert(`${currentValue.name} is already in contacts`)
      : this.setState(prevState => {
          const newContact = {
            id: nanoid(),
            name: currentValue.name,
            number: currentValue.number,
          };            
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount() {
    const getContacts = JSON.parse(localStorage.getItem('contacts'))
    if (getContacts){
      this.setState({contacts : getContacts})
    }
  }
  componentDidUpdate( prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  }
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <AppStyled>
        <Section title="Phonebook">
          <Form onSubmit={this.createNewContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filtredContacts}
            onDelete={this.deleteContact}
          />
        </Section>
      </AppStyled>
    );
  }
}
