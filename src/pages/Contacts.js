import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations';
import { selectLoading } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <h1>Your contacts</h1>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progres...'}</div>
      <Filter />

      <ContactList />
    </>
  );
}
