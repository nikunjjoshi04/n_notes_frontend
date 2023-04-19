import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "643fc0a176af873693d764e0",
      user: "643e49baca028f78d0ddeffd",
      title: "title1",
      description: "description1",
      tag: "General",
      date: "2023-04-19T10:21:21.442Z",
      __v: 0,
    },
    {
      _id: "643fc0a876af873693d764e3",
      user: "643e49baca028f78d0ddeffd",
      title: "title2",
      description: "description2",
      tag: "General",
      date: "2023-04-19T10:21:28.149Z",
      __v: 0,
    },
    {
      _id: "643fc0b076af873693d764e6",
      user: "643e49baca028f78d0ddeffd",
      title: "title3",
      description: "description3",
      tag: "General",
      date: "2023-04-19T10:21:36.193Z",
      __v: 0,
    },
    {
      _id: "643fc0a176af873693d764e0",
      user: "643e49baca028f78d0ddeffd",
      title: "title1",
      description: "description1",
      tag: "General",
      date: "2023-04-19T10:21:21.442Z",
      __v: 0,
    },
    {
      _id: "643fc0a876af873693d764e3",
      user: "643e49baca028f78d0ddeffd",
      title: "title2",
      description: "description2",
      tag: "General",
      date: "2023-04-19T10:21:28.149Z",
      __v: 0,
    },
    {
      _id: "643fc0b076af873693d764e6",
      user: "643e49baca028f78d0ddeffd",
      title: "title3",
      description: "description3",
      tag: "General",
      date: "2023-04-19T10:21:36.193Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
