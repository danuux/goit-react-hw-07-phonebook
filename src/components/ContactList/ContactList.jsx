import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectFilteredContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';

const ContactList = ({ children }) => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactsWrapper}>
      <h2 className={styles.contactsTitle}>Contacts</h2>
      {children}
      <ul className={styles.contactsList}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactElement}>
            {contact.name}: {contact.number}
            <button
              id={contact.id}
              onClick={() => handleDelete(contact.id)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ContactList;
