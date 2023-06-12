import React from "react";
import DefaultAvatar from "../assets/defaultAvatar.png";
export default function Avatar (loggedInStatus) {
  const status = loggedInStatus ? loggedInStatus.status : null;
  const avatar = loggedInStatus.user ? loggedInStatus.user.avatar : <img id="defaultAvatar" alt="defaultUserAvatar" src={DefaultAvatar} />;



  return (
    <>
  {
    avatar
  }

</>
  );
  }
