import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, filterContact } from '../redux/sliceContacts';

export const App = () => {
const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const createContact = contact => {
    if(contacts !== '') {
      const double = contacts.find(
        item => item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      );
      if (double) {
        return alert(`${contact.name} is already in contacts`);
      }
      contact.id = nanoid();
      dispatch(addContact(contact));
    }
  };

  const getContacts = () => {
    const filterContactValue = filter.toLowerCase();
    if(contacts !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterContactValue)
      );
    }
  };

  const deleteContacts = id => dispatch(deleteContact(id))

  const changeFilterValue = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <main className={css.container}>
      <header className={css.wrapper}>
      <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      </section>
      </header>
      <section className={css.section}>
      <ContactForm createContact={createContact} />
      <div className={css.wrap}>
        <h2 className={css.title}>Contacts</h2>
        </div>
        <Filter value={filter} changeFilterValue={changeFilterValue} />
        <ContactList contacts={getContacts()} deleteContact={deleteContacts} />
      
      </section>
    
    </main>
  );
};
