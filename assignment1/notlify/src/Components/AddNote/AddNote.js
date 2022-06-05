import { useState } from "react";
import "./AddNote.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    if (event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="28"
        cols="200"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
