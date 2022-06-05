import React, { useState } from "react";
import Note from "../Note/Note";
import "./NoteList.css";

const NotesList = ({ notes }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleShow = (data) => {
    setModalIsOpen(true);
    setModalData(data);
  };

  const handleOnhide = () => {
    setModalIsOpen(false);
    setModalData("");
  };

  return (
    <div className="cards">
      {notes &&
        notes.map((note) => (
          <div
            className="card"
            key={note.id}
            onClick={() => {
              handleShow(note);
            }}
          >
            <h2>{note.title}</h2>
          </div>
        ))}

      {modalIsOpen && (
        <Note
          title={modalData.title}
          text={modalData.text}
          showModel={modalIsOpen}
          handleModalClose={handleOnhide}
        />
      )}
    </div>
  );
};

export default NotesList;
