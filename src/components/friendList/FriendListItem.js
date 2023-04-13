import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css['friend-list-item']}>
      <span
        className={css['friend-list-status']}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className={css['friend-list-avatar']}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// FriendListItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ),
// };
