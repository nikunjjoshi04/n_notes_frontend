import React, { useContext, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import UpdateNote from "./UpdateNote";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(noteContext);
  const { deleteNote, setUpdateNote } = context;
  const updateNoteRef = useRef(null);

  const handleUpdateClick = (currentNote) => {
    setUpdateNote(currentNote);
  }

  return (
    <>
      <UpdateNote updateNoteRef={updateNoteRef}/>
      <div className="col-md-3 my-2">
        <div className="card">
          <span className="badge badge-light">{note.tag}</span>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
          </div>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-sm btn-light"
              ref={updateNoteRef}
              onClick={() => { handleUpdateClick(note) }}
              data-toggle="modal"
              data-target="#updateNoteModelId"
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-sm btn-light"
              onClick={() => { deleteNote(note._id) }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
