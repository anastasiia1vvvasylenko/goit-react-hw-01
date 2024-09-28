import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div className={styles['user-info']}>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.info}>
        <li className={styles.list}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.list}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
