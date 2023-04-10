import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import user from './data/user';
import data from './data/data';

export const App = props => {
  return (
    <>
      <Profile user={user} />;
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
