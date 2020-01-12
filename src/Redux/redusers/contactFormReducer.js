import * as types from '../types/contactFormTypes';
import { NotificationManager } from 'react-notifications';

const contactFormReducer = (state, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      const filr = state.contacts.find(contact => {
        return (
          contact.name.toLowerCase() === payload.contact.name.toLowerCase()
        );
      });

      if (filr !== undefined) {
        NotificationManager.warning(
          `${payload.contact.name} already exist`,
          'Try another name',
          3000,
        );
        return state;
      }

      return {
        ...state,
        contacts: [...state.contacts, payload.contact],
      };
    case types.REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload.id),
      };
    case types.CHANGE_FILTER:
      return { ...state, filter: payload.filter };
    default:
      return state;
  }
};

export default contactFormReducer;
