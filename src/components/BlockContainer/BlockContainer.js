import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlockContainer.module.css';

const BlockContainer = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

BlockContainer.propTypes = {
  children: PropTypes.array.isRequired
}

export default BlockContainer;