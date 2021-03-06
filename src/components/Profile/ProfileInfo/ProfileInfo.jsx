import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.content}>
      <div className={s.contentImage}>
        <img
          src="https://img1.goodfon.ru/wallpaper/nbig/c/35/nochnye-goroda-ogni-doma.jpg"
          alt="img"
        />
      </div>
      <div className={s.descriptionBlock}>
        <ul>
          <li> {props.profile.userId}</li>
          <li> {props.profile.fullName}</li>
          <li> {props.profile.lookingForAJob}</li>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo;
