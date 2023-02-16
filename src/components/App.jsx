import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

// import { fetchContacts } from 'redux/operations';
// import { fetchContacts } from 'redux/contacts/operations';

// import { ContactForm } from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { selectError, selectLoading } from 'redux/selectors';
// import { selectError } from 'redux/contacts/selectors';

// import css from './App.module.css';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        ></Route>
      </Route>
    </Routes>
  );

  // return (
  //   <div className={css.container}>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     {/* {isLoading && !error && <p>Loading...</p>} */}
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //   </div>
  // );
};

// export default App;
