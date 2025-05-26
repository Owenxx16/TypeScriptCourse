import React from "react";
import type { Info } from "./types";

type UserInfoProps = {
  user: Info;
};
const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserInfo;
