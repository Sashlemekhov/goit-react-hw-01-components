import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ props }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{props.label}</span>
      <span className={styles.percentage}>{props.percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  props: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired
}; 

export default StatisticsItem;

