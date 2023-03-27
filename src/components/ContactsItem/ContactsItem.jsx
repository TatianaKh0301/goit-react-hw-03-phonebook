import React from "react";
import PropTypes from 'prop-types';

import { ContactWrapper } from "./ContactsItem.styled";

export const ContactsItem = ({id, name, number, onDeleteContact}) => (
    <ContactWrapper>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={ () => onDeleteContact(id) }>Delete</button>
    </ContactWrapper>
);

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired, 
}