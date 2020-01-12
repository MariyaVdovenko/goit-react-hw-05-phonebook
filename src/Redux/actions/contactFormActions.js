import * as types from '../types/contactFormTypes';
import shortId from 'shortid';

export const add = (name, number) => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      contact: {
        id: shortId.generate(),
        name: name,
        number: number,
      },
    },
  };
};

export const remove = id => {
  return {
    type: types.REMOVE_CONTACT,
    payload: { id },
  };
};

export const changeFilter = filter => {
  return {
    type: types.CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};
