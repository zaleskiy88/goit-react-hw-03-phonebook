import React from 'react';
import { Contact, Button } from 'index';
import PropTypes from 'prop-types';

export const ListItem = ({ name, number, onDelete, id }) => {
  return (
    <Contact>
      {name}: {number}
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Contact>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
