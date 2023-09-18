import { Component } from 'react';
import { ContactList } from '../ContactList/ContactLIst';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    number: '',
    filter: '',
  };
  //
  //
  //
  //
  //
  delete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(e => e.id !== id),
    }));
  };
  //
  //
  //
  //
  //
  findNecessary = filterQvery => {
    this.setState(prev => ({
      filter: prev.contacts.filter(e =>
        e.name.toLowerCase().includes(filterQvery.toLowerCase())
      ),
    }));
  };

  //
  //
  //
  //
  //

  createNewContact = e => {
    e.preventDefault();
    let value = e.target[0].value;
    let number = e.target[1].value;
    if (this.state.contacts.find(e => e.number === number)) {
      alert(`${value} is already in contacts.`);
      return;
    }
    const obj = {
      name: value,
      id: nanoid(),
      number: number,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, obj],
    }));
  };
  render() {
    return (
      <div className="container">
        <Form props={this.createNewContact} />
        <Filter findNecessary={this.findNecessary} />

        <ContactList
          props={this.state.filter || this.state.contacts}
          delete={this.delete}
        />
      </div>
    );
  }
}
