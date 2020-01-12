import React, { Component } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import Filter from '../Filter/Filter';
import { connect } from 'react-redux';

import contactFormSelectors from '../../Redux/contactFormSelectors';

class ContactList extends Component {
  render() {
    return (
      <>
        <Filter />
        <ul>
          {this.props.contacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contacts: contactFormSelectors.getFiltredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
