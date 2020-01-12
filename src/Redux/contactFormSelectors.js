import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;

const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactById = (state, id) => {
  const contacts = getContacts(state);
  return contacts.find(contact => contact.id === id);
};
export default { getContacts, getFilter, getFiltredContacts, getContactById };
