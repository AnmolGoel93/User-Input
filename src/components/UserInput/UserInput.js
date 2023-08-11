import React, { useState } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import ErrorModal from "../OverlayModal/ErrorModal";

const initialState = {
  userName: "",
  age: "",
};

const UserInput = ({ onAddNewUser }) => {
  const [userInput, setUserInput] = useState(initialState);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      userInput.userName.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    onAddNewUser({ id: Math.random().toString(), ...userInput });
    setUserInput(initialState);
    errorHandler();
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const errorHandler = () => setError();

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}

      <Card>
        <form onSubmit={addUserHandler}>
          <div className={classes["user-input__control"]}>
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              type="text"
              value={userInput.userName}
              onChange={(event) =>
                inputChangeHandler("userName", event.target.value)
              }
            />
          </div>
          <div className={classes["user-input__control"]}>
            <label htmlFor="age">Age (Years)</label>
            <Input
              id="age"
              type="number"
              value={userInput.age}
              onChange={(event) =>
                inputChangeHandler("age", event.target.value)
              }
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserInput;
