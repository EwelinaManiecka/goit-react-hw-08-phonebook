import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
// import { addContact } from 'redux/contacts/operations';
// import { addContact } from 'redux/contacts/operations';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert('Contact cannot be empty. Enter some text');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} name="text"></input>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
