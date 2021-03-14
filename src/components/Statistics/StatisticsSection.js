import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './StatisticsSection.module.css';

const StatisticsSection = ({ props, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
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
  title: PropTypes.string,
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};


export default StatisticsSection;


