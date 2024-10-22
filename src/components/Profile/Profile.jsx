import css from './Profile.module.css';

// console.log(css);

export default function Profile () {
    return (
    <div className={css.card}>
      <div className={css.avatarCard}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={css.avatarName}> Petra Marica</p>
        <p className={css.avatarDescription}>@pmarica</p>
        <p className={css.avatarDescription}>Salvador, Brasil</p>
      </div>
    
        <ul className={css.statisticList}>
        <li className={css.statisticListItem}>
            <span className={css.statisticName}>Followers</span>
          <span className={css.statisticNumber}>1000</span>
        </li>
        <li className={css.statisticListItem}>
          <span className={css.statisticName}>Views</span>
          <span className={css.statisticNumber}>2000</span>
        </li>
        <li className={css.statisticListItem}>
          <span className={css.statisticName}>Likes</span>
          <span className={css.statisticNumber}>3000</span>
        </li>
      </ul>
    </div>
    );
}