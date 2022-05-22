import React from "react";
import FriendCard from "./FriendCard";

export default function Friends(props) {
  return (
    <div>
      {props.friendsData.map((items, index) => {
        return (
          <FriendCard
            key={index}
            name={items.name}
            pic={items.pic}
          ></FriendCard>
        );
      })}
    </div>
  );
}
