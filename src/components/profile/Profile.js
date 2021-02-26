import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar:
  'data:image/png;base64,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'
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
