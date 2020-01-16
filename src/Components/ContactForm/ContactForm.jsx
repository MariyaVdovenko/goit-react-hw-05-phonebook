import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import * as contactFormActions from '../../Redux/actions/contactFormActions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name) {
      NotificationManager.error('Введите имя', 'Ошибка', 5000);

      return;
    }

    this.props.onSave(this.state.name, this.state.number);
    this.setState({ number: '', name: '' });
  };
  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <label className={styles.Label}>
          <span className={styles.Label__text}>Name</span>
          <input
            className={styles.Input}
            type="text"
            placeholder="Enter name(min 3 symb)"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            pattern="[A-Za-z]{3,}"
          />
          <input
            className={styles.Input}
            type="number"
            placeholder="Enter number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.Button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: (name, number) => dispatch(contactFormActions.add(name, number)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
