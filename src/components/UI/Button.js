import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      {...props}
      className={`${classes.button} ${props.className}`}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
