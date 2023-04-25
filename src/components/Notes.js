import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const addNoteRef = useRef(null);
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <AddNote addNoteRef={addNoteRef} />
      <div className="d-flex bd-highlight mb-3 my-3">
        <div className="mr-auto p-2 bd-highlight">
          <h2>Notes</h2>
        </div>
        <div className="p-2 bd-highlight">
          <button
            type="button"
            ref={addNoteRef}
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#addNoteModelId"
          >
            Add New Note
          </button>
        </div>
      </div>

      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
};

export default Notes;
