import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

export * from 'components/ContactsForm/ContactsForm';
export * from 'components/ContactsList/ContactsList';
export * from 'components/ContactsFilterInput/ContactsFilterInput';
export * from 'components/App/App';

export * from 'components/ContactsForm/ContactsForm.styled';
export * from 'components/ContactsList/ContactsList.styled';
export * from 'components/ui/Button.styled';
export * from 'components/ui/AppContainer.styled';
export * from 'components/ui/Form.styled';
export * from 'components/ui/Input.styled';
export * from 'components/ui/Label.styled';
export * from 'components/ListItem/ListItem';
export * from 'components/ListItem/ListItem.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
