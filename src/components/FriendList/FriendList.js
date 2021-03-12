import React from 'react';
import PropTypes from 'prop-types';
import defautImage from '../../default-img.jpg';
import styles from './FriendList.module.css';


const FriendList = ({ props }) => {
  return (
    <ul className={styles.friendList} >
      {props.map(prop => (
        <li className={styles.item} key={prop.id}>
          <span className={prop.isOnline? styles.online : styles.offline}></span>
          <img className={styles.avatar} src={prop.avatar} alt={prop.name} width="48" />
          <p className={styles.name}>{prop.name}</p>
        </li>

      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  avatar: defautImage,
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  )
};


export default FriendList;
