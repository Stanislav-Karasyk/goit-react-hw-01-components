import Profile from './profile/Profile.js';
import user from '../base/user.json';
import Statistics from './statistics/Statistics.js';
import statisticalData from '../base/statistical-data.json';
import FriendList from './friendList/FriendList.js';
import friends from '../base/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory.js';
import transactions from '../base/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};
export default App;
