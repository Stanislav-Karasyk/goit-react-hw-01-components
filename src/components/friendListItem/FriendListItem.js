import React from 'react';
import styles from '../friendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      {!isOnline ? (
        <span className={styles.status}>{isOnline}</span>
      ) : (
        <span className={styles.statusActive}>{isOnline}</span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
