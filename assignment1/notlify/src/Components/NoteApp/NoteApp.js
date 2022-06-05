import React, { useState, useEffect } from "react";
import AddNote from "../AddNote/AddNote";
import NotesList from "../NotesList/NotesList";


const NoteApp = (props) => {
  const [localNotes, setlocalNotes] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    let retrievedNotes = JSON.parse(localStorage.getItem("notes"));
    retrievedNotes && setlocalNotes(retrievedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(localNotes));
  }, [localNotes]);

  const addNote = (text) => {
    const dateID = new Date();
    const newNote = {
      id: dateID,
      title: text.slice(0, 20),
      text: text,
    };
    const newNotes = [...localNotes, newNote];
    setlocalNotes(newNotes);
  };

  return (
    <>
      <AddNote handleAddNote={addNote}></AddNote>
      <NotesList notes={localNotes}></NotesList>
    </>
  );
};

export default NoteApp;
