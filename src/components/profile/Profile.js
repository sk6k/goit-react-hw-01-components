import Description from './Description';
import Stats from './Stats';
import './Profile.scss';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={{ ...user.stats }} />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

// Profile.propTypes = {
//   user: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }),
//   }).isRequired,
// };
