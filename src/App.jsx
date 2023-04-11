import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactions/TransactionHistory';

import user from './data/user';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
