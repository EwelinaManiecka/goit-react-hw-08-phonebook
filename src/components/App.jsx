import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<RegisterPage />}
            />
          }
        ></Route>
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<LoginPage />}
            />
          }
        ></Route>
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<ContactPage />}
            />
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