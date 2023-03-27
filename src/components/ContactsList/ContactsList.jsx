import React from "react";
import PropTypes from 'prop-types';

import { ContactsItem } from "components/ContactsItem";
import {ContactsListWrapper, ContactsTitle} from './ContactList.styled';

export const ContactsList = ({contacts, onDeleteContact}) => (
        <ContactsListWrapper>
            <ContactsTitle>Contacts</ContactsTitle>
            {contacts.map(({id, name, number}) => (
                <li key={id} >
                    <ContactsItem id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>
                </li>
            ))}
        </ContactsListWrapper>
    );

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired, 
            number: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
