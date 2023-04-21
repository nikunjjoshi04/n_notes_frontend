import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const HOST = "http://127.0.0.1:5000/api";
  const [notes, setNotes] = useState([]);

  // getNotes
  const getNotes = async () => {
    const response = await fetch(`${HOST}/notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzZTQ5YmFjYTAyOGY3OGQwZGRlZmZkIn0sImlhdCI6MTY4MTgxNTkyMH0.Cmfy9ngCGfd_Y_-WaT0yzZIcz9OP28pg0_BBNkKa34Q",
      },
    });
    var initialNotes = await response.json();
    setNotes(initialNotes.data);
  };

  // AddNote
  const addNote = async ({ title, description, tag }) => {
    const data = { title, description, tag };
    console.log("AddNote", data);
    const response = await fetch(`${HOST}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzZTQ5YmFjYTAyOGY3OGQwZGRlZmZkIn0sImlhdCI6MTY4MTgxNTkyMH0.Cmfy9ngCGfd_Y_-WaT0yzZIcz9OP28pg0_BBNkKa34Q",
      },
      body: JSON.stringify(data),
    });
    var note = await response.json();
    setNotes(notes.concat(note.data));
    console.log("AddNote", note);
  };

  // deleteNote
  const deleteNote = async (id) => {
    const response = await fetch(`${HOST}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzZTQ5YmFjYTAyOGY3OGQwZGRlZmZkIn0sImlhdCI6MTY4MTgxNTkyMH0.Cmfy9ngCGfd_Y_-WaT0yzZIcz9OP28pg0_BBNkKa34Q",
      },
    });
    await response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // editNote
  const editNote = async ({ id, title, description, tag }) => {
    const data = { title, description, tag };
    const response = await fetch(`${HOST}/notes${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzZTQ5YmFjYTAyOGY3OGQwZGRlZmZkIn0sImlhdCI6MTY4MTgxNTkyMH0.Cmfy9ngCGfd_Y_-WaT0yzZIcz9OP28pg0_BBNkKa34Q",
      },
      body: JSON.stringify(data),
    });

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

    console.log("editNote", response.json());
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
