import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label } from './ContactsFilterInput.styled';

export const ContactsFilter = ({ inputHandler }) => {
  const filterId = nanoid();
  return (
    <Label htmlFor={filterId}>
      Find contacts by name
      <input type="text" name="filter" onChange={inputHandler} id={filterId} />
    </Label>
  );
};

ContactsFilter.propTypes = {
  inputHandler: PropTypes.func.isRequired,
};
