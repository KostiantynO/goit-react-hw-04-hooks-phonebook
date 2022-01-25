import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { load, save } from 'storage';
import { nanoid, Section } from 'common';
import { ContactForm, ContactList, Filter } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyled } from './App.styled';

const LS_KEY = 'phonebook-contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = load(LS_KEY);
    return savedContacts?.length > 0 ? savedContacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    save(LS_KEY, contacts?.length > 0 ? contacts : []);
  }, [contacts]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts.length <= 0) return [];

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const addContact = ({ name, number }) => {
    const normalizedNewName = name.toLowerCase();
    const savedContact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedNewName
    );

    if (savedContact) {
      return toast.error(`${savedContact.name} is already saved`);
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(contacts => [newContact, ...contacts]);
  };

  const deleteContact = toDeleteId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== toDeleteId));
  };

  const changeFilter = e => setFilter(e.target.value);
  const clearFilter = () => setFilter('');

  const visibleContacts = getVisibleContacts();

  return (
    <AppStyled>
      <Section title="Phonebook" h="1">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter
          value={filter}
          onChangeFilter={changeFilter}
          onClearFilter={clearFilter}
        />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>

      <ToastContainer />
    </AppStyled>
  );
};
