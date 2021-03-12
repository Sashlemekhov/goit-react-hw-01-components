import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexContainer.module.css';

const FlexContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

FlexContainer.propTypes = {
  children: PropTypes.array.isRequired
}

export default FlexContainer;