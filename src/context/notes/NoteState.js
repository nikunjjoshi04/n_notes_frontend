import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const HOST = "http://127.0.0.1:5000/api";
  const [notes, setNotes] = useState([]);
  const [updateNote, setUpdateNote] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });

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
    
    const response = await fetch(`${HOST}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzZTQ5YmFjYTAyOGY3OGQwZGRlZmZkIn0sImlhdCI6MTY4MTgxNTkyMH0.Cmfy9ngCGfd_Y_-WaT0yzZIcz9OP28pg0_BBNkKa34Q",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      var note = await response.json();
      setNotes(notes.concat(note.data));
    } else {
      const errors = await response.json();
      errors.errors.forEach((error) => {
        console.log("error", error);
      });
    }
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
  const editNote = async ({ _id, title, description, tag }) => {
    const data = { title, description, tag };
    const response = await fetch(`${HOST}/notes/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzZTQ5YmFjYTAyOGY3OGQwZGRlZmZkIn0sImlhdCI6MTY4MTgxNTkyMH0.Cmfy9ngCGfd_Y_-WaT0yzZIcz9OP28pg0_BBNkKa34Q",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      await response.json();
      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === _id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } else {
      const errors = await response.json();
      errors.errors.forEach((error) => {
        console.log("error", error);
      });
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        addNote,
        deleteNote,
        editNote,
        updateNote,
        setUpdateNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
