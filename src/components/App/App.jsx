import React, {Component} from "react";
import shortid from "shortid";
import toast, { Toaster } from 'react-hot-toast';
import {AppWrapper} from "./App.styled";
import { FormAddContacts } from "components/FormAddContacts";
import { Filter } from "components/Filter";
import { ContactsList } from "components/ContactsList";


export class App extends Component {
    state = {
        // contacts: [
        //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        contacts: [],
        filter:'',
    }
  
    addContacts = (values) => {
      const { name, number } = values;
      console.log("name", name);
      const {contacts} = this.state;
      const normalizedName = name.toLowerCase();
      console.log("normalizedName", normalizedName);
      const findName = contacts.find(contact => contact.name.toLocaleLowerCase() === normalizedName);
      console.log("normalizedName", normalizedName);
      console.log("findName", findName);
      if (findName !== undefined) {
        toast.error(`${name} is already in contacts`);
      } 
      else 
      {
          const contact = {
          id: shortid.generate(),
          name,
          number
        };
          this.setState(({contacts}) => ({
          contacts: [contact, ...contacts],
        }));      } 
      
    };

    changeFilter = event => {
      this.setState({filter: event.currentTarget.value});
    };

    getVisibleContacts= () => {
      const { filter, contacts } = this.state;
      
      const normalizedFilter = filter.toLowerCase();
      
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),  
      );
      
    };

    deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };

    componentDidMount() {
      const contacts = localStorage.getItem('contacts');
      console.log("contacts", contacts);
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        this.setState({contacts: parsedContacts});
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }    
    }

    render() {
            const { filter } = this.state;
            const visibleContacts = this.getVisibleContacts();

        return (
            <AppWrapper>
                <FormAddContacts onSubmit={this.addContacts}/>
                <Toaster />
                <Filter value={filter} onChange={this.changeFilter}/>
                <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
            </AppWrapper>
        );
    }  
};
