import { useDispatch, useSelector } from "react-redux";
import { toggleNameVisible } from "../store/profile";
import "../style/global.scss";

export function Profile() {
  const { firstName } = useSelector((state) => state.profile.user);
  const nameVisible = useSelector((state) => state.profile.nameVisible);

  const dispatch = useDispatch();

  return (
    <div className="profile">
      <button onClick={() => dispatch(toggleNameVisible())}>Toggle name</button>
      {nameVisible && <h2>{firstName}</h2>}
    </div>
  );
}
