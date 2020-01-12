import React from 'react';
import styles from './ContactListItem.module.css';
import { connect } from 'react-redux';
import * as contactFormActions from '../../Redux/actions/contactFormActions';
import contactFormSelectors from '../../Redux/contactFormSelectors';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={styles.ContactListItem}>
      <p className={styles.name}>
        {name}: {number}
      </p>
      <button className={styles.Button} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactFormSelectors.getContactById(state, ownProps.id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteContact: id => dispatch(contactFormActions.remove(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
