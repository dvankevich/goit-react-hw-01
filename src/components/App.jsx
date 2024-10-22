import './App.css'
import Profile from './Profile/Profile'
import userData from "../userData.json";
import FrendList from './FriendList/FriendList';
import friends from "../friends.json";

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

      <FrendList friends={friends}/>
    </>
  )
}

export default App
