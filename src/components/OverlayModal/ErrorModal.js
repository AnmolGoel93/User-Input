import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../OverlayModal/Backdrop";
import Modal from "../OverlayModal/Modal";

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
