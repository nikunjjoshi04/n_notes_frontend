import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <span className="badge badge-light">{note.tag}</span>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-sm btn-light">
            Edit
          </button>
          <button type="button" className="btn btn-sm btn-light" onClick={() => {deleteNote(note._id)}}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
