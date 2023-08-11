import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = ({ userList }) => {
  return (
    <Card>
      <ul className={classes["user-list"]}>
        {userList.map((item) => (
          <li key={item.id} className={classes["user-list__item"]}>
            {item.userName} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
