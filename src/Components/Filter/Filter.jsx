import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactFormSelectors from '../../Redux/contactFormSelectors';
import * as contactFormActions from '../../Redux/actions/contactFormActions';

const Filter = ({ filter, onChangeFilter }) => (
  <section>
    <input
      className={styles.Input}
      type="text"
      name="filter"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </section>
);

const mapStateToProps = state => {
  return {
    filter: contactFormSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispath => {
  return {
    onChangeFilter: filter => dispath(contactFormActions.changeFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
