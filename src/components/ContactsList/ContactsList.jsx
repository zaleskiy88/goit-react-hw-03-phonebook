import React from 'react';
import { List, ListItem } from 'index';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <ListItem
              name={name}
              number={number}
              onDelete={onDelete}
              id={id}
              key={id}
            />
          );
        })}
      </List>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
