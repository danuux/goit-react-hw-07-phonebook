import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target[0].value;
    const number = evt.target[1].value;
    const newContact = { name: name, number: number };
    if (contacts.filter(contact => contact.name === name).length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    dispatch(addContact(newContact));
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Type name"
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Type number"
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.subButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
