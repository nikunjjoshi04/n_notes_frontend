import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, setNotes } = context;

  return (
    <>
      <h2>Notes</h2>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id}/>;
        })}
      </div>
    </>
  );
};

export default Notes;
