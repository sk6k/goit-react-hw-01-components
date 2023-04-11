import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className={css['friend-list-item']} key={id}>
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
  });
};

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
