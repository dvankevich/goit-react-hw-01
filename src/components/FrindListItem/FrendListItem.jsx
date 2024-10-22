import clsx from "clsx";
import css from "./FriendListItem.module.css";

function FriendListItem() {
  return (
    <div className={css.friendListItem}>
      <img className={css.friendAvatar} src="https://cdn-icons-png.flaticon.com/512/1998/1998592.png" alt="Avatar" width="48" />
      <p className={css.friendName}>Friend name</p>
      <p className={css.friendStatus}>Friend status</p>
    </div>
  );
}

export default FriendListItem;