import FriendListItem from "../FrindListItem/FrendListItem";
import css from "./FriendList.module.css"

function FrendList() {
  return (
    <ul className={css.frendList}>
      <li><FriendListItem /></li>
      <li><FriendListItem /></li>
      <li><FriendListItem /></li>
      <li><FriendListItem /></li>
      <li><FriendListItem /></li>
    </ul>
  );
};

export default FrendList;