import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: "", description: "", tag: "" });
    props.addNoteRef.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="modal fade"
        id="addNoteModelId"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <form className="my-3" onSubmit={handleClick}>
              <div className="modal-header">
                <h5 className="modal-title" id="addNoteModelIdLabel">
                  Add Note
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container my-3">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={onChange}
                        value={note.title}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="tag">Tag</label>
                      <input
                        type="tag"
                        className="form-control"
                        id="tag"
                        name="tag"
                        onChange={onChange}
                        value={note.tag}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows={3}
                      onChange={onChange}
                      value={note.description}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
