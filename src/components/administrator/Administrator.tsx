"use client";
import { useState } from "react";
import UserList from "./userList/UserList";
import AddNewUser from "./addNewUser/AddNewUser";

const Administrator = () => {
  const [addNewUser, setAddNewUser] = useState<boolean>(false);
  const handleNewUser = () => {
    setAddNewUser(true);
  };

  return (
    <div className="py-5 px-12">
      {addNewUser ? <AddNewUser /> : <UserList handleNewUser={handleNewUser} />}
    </div>
  );
};

export default Administrator;
