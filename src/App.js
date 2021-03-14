import React from 'react';
import Profile from './components/Profile/Profile.js';
import StatisticsSection from './components/Statistics/StatisticsSection';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import FlexContainer from './components/FlexContainer/FlexContainer';
import BlockContainer from './components/BlockContainer/BlockContainer';
import userData from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friendsData from './components/FriendList/friends.json';
import transactionsData from './components/TransactionHistory/transactions.json';


const App = () => {
  return (
    <div>
      <FlexContainer>

        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <FriendList props={friendsData} />

      </FlexContainer>

      <BlockContainer>

        <StatisticsSection
          props={statisticalData}
          title={"Upload stats"}
        />
        <TransactionHistory props={transactionsData} />

      </BlockContainer>
    </div>
  );
};

export default App;