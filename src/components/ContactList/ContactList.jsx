import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/phonebook/phonebook.selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { fetchGetContacts } from 'redux/phonebook/phonebook.thunk';

import css from './ContactList.module.css';
export const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetContacts());
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
