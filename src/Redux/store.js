import { createStore } from 'redux';
import contactFormReducer from './redusers/contactFormReducer';
import allContacts from '../contacts.json';

const preloadedState = {
  contacts: localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : allContacts,
  filter: '',
};

const store = createStore(
  contactFormReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
});

export default store;
