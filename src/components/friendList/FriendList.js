import './FriendList.scss';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="friend-list-item" key={id}>
            <span
              className="friend-list-status"
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            ></span>
            <img
              className="friend-list-avatar"
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
