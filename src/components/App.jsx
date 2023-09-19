import { Component } from 'react';
import { ContactList } from './ContactList/ContactLIst';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  delete = id => {
    this.state.filter
      ? this.setState(prev => ({
          filter: prev.filter.filter(e => e.id !== id),
          contacts: prev.contacts.filter(e => e.id !== id),
        }))
      : this.setState(prev => ({
          contacts: prev.contacts.filter(e => e.id !== id),
        }));
  };

  findNecessary = filterQvery => {
    this.setState(prev => ({
      filter: prev.contacts.filter(e =>
        e.name.toLowerCase().includes(filterQvery.toLowerCase())
      ),
    }));
  };

  createContact = obj => {
    if (this.state.contacts.find(e => e.name === obj.name)) {
      alert(`${obj.name} is already in contacts.`);
      return;
    }
    const newObj = {
      ...obj,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newObj, ...prev.contacts],
    }));
  };

  forContactList = () => {
    return this.state.filter || this.state.contacts;
  };

  render() {
    console.log(this.forContactList());
    return (
      <div className="container">
        <Form createContact={this.createContact} />
        <Filter findNecessary={this.findNecessary} />

        <ContactList contacts={this.forContactList()} delete={this.delete} />
      </div>
    );
  }
}
