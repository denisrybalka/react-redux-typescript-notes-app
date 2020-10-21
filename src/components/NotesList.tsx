import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NotesList: React.FC = () => {
  const notesList = useSelector((state: AppState) => state.notesList);

  return (
    <div className="col-5">
      {notesList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          date={note.date}
          noteText={note.noteText}
          title={note.title}
        />
      ))}
    </div>
  );
};

export default NotesList;
