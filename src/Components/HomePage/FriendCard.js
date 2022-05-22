import React from "react";
import "../HomePage/FriendCard.css";

export default function FriendCard(props) {
  console.log(props.pic);
  const profilepic = props.pic;

  return (
    <div className="friendsLogo">
      <div className="Recent-friends">
        <div className="Recent-friends-pic">
          <img src={profilepic} />
        </div>
        <div className="Recent-friends-name">{props.name}</div>
      </div>
      <button className="btn btn-primary btn-sm">Add Friend</button>
    </div>
  );
}
