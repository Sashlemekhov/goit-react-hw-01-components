import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './StatisticsSection.module.css';

const StatisticsSection = ({ props }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {props.map(prop => (
          <StatisticsItem key={prop.id}
          props = {prop} />
        ))}
      </ul>
    </section>
  )
}

StatisticsSection.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};


export default StatisticsSection;


