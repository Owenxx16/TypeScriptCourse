import React from "react";
import type { Info } from "./types";
const UserInfo = ({ id, name, email }: Info) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserInfo;
