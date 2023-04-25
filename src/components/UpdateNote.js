import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const UpdateNote = (props) => {
  const context = useContext(noteContext);
  const { editNote, updateNote, setUpdateNote } = context;

  const handleClick = (e) => {
    e.preventDefault();
    editNote(updateNote);
    props.updateNoteRef.current.click();
  };

  const onChange = (e) => {
    setUpdateNote({ ...updateNote, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="modal fade"
        id="updateNoteModelId"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <form className="my-3" onSubmit={handleClick}>
              <div className="modal-header">
                <h5 className="modal-title" id="updateNoteModelIdLabel">
                  Update Note
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
                        value={updateNote? updateNote.title: ""}
                        onChange={onChange}
                        minLength={5}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="tag">Tag</label>
                      <input
                        type="tag"
                        className="form-control"
                        id="tag"
                        name="tag"
                        value={updateNote? updateNote.tag: ""}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={updateNote? updateNote.description: ""}
                      rows={3}
                      onChange={onChange}
                      minLength={5}
                      required
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
                  // onClick={handleClick}
                  className="btn btn-primary"
                >
                  Update Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateNote;
