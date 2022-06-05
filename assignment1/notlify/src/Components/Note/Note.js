import React from "react";
import "./Note.css";

const Note = ({ text, title, handleModalClose }) => {
  return (
    <>
      <div className="popup-box note">
        <div className="box">{title}</div>
        <div className="box">{text}</div>
        <button className="close-icon" onClick={() => handleModalClose()}>
          close
        </button>
      </div>
    </>
  );
};

export default Note;
