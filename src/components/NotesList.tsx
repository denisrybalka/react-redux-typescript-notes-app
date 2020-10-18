import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import { AppState } from "../redux/reducers/reducer";

const NotesList: React.FC = () => {
  const notesList = useSelector((state: AppState) => state.notesList);

  return (
    <div className="list-group align-items-center">
      {notesList.map((note) => (
        <Note key={note.id} noteText={note.noteText} title={note.title} date={note.id}/>
      ))}
    </div>
  );
};

export default NotesList;
