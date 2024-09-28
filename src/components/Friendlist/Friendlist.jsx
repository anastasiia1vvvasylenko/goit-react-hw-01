import styles from './Friendlist.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function Friendlist({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
