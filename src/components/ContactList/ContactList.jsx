import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectItems,
} from 'redux/contacts/contacts.selectors';
import { selectFilter } from 'redux/filter/filter.selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';

import css from './ContactList.module.css';
export const ContactList = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = useMemo(() => {
    return items?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [items, normalizedFilter]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <h2>ERROR</h2>}
      <ul className={css.list}>
        {filterContacts.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            <ContactItem name={name} phone={phone} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
