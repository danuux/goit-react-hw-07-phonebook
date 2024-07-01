import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

import Section from './Section/Section.jsx';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section title="Phonebook">
      <ContactForm />
      <ContactList>
        {isLoading && !error && <b>Request in progress...</b>}
        <Filter />
      </ContactList>
    </Section>
  );
};
export default App;
