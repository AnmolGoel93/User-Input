import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [userList, setUserList] = useState([
    { id: "user1", userName: "Anmol Goel", age: 30 },
    { id: "user2", userName: "Yogesh Beria", age: 31 },
  ]);

  const addNewUserHandler = (enteredUserInput) => {
    setUserList((prevUsers) => {
      return [enteredUserInput, ...prevUsers];
    });
  };

  return (
    <>
      <UserInput onAddNewUser={addNewUserHandler} />
      <UserList userList={userList} />
    </>
  );
};

export default App;
