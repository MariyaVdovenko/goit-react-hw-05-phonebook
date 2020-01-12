import React, { Component } from 'react';
import styles from './App.module.css';
import ContactForm from './Components/ContactForm/ContactForm';
import { connect } from 'react-redux';
import ContactList from './Components/ContactList/ContactList';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

//import T from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1 className={styles.AppText}>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h2 className={styles.AppText}>Contacts</h2>

        <ContactList
          contacts={this.props.contacts}
          onDeleteContact={this.deleteContact}
        />
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
