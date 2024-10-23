import './App.css'
import Profile from './Profile/Profile'
import userData from "../userData.json";
import FrendList from './FriendList/FriendList';
import friends from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FrendList friends={friends} />
      
      <TransactionHistory transactions={transactions}/>
    </>
  )
}

export default App
