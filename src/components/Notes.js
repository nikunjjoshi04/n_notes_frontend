import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <AddNote />
      <h2>Notes</h2>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
};

export default Notes;
