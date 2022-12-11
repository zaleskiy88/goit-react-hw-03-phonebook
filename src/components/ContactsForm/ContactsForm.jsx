import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormContainer, Button, Form, Label, Input } from 'index';

export class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };

  inputHandler = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  submitHandler = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state)
      ? this.setState({ name: '', number: '' })
      : this.setState({ name: '' });
  };

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const { name, number } = this.state;

    return (
      <FormContainer>
        <Form onSubmit={this.submitHandler}>
          <Label htmlFor={nameInputId}>
            Name
            <Input
              value={name}
              onChange={this.inputHandler}
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor={numberInputId}>
            Number
            <Input
              id={numberInputId}
              value={number}
              onChange={this.inputHandler}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </FormContainer>
    );
  }
}
