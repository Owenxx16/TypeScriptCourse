import React from "react";
import type { AdminInfoList } from "./types";

type AdminInfoProps = {
  admin: AdminInfoList;
};
const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
      <p>{admin.id}</p>
      <p>{admin.name}</p>
      <p>{admin.email}</p>
      <p>{admin.isAdmin ? "Yes" : "No"}</p>
    </div>
  );
};

export default AdminInfo;
