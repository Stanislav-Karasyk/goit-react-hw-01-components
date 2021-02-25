import Profile from './profile/Profile.js';
import user from '../base/user.json';
import statisticalData from '../base/statistical-data.json';
import Statistics from './statistics/Statistics.js';

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
    </>
  );
};
export default App;
