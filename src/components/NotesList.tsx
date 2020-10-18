import React from "react";
import Note from './Note';

const NotesList: React.FC = () => {
  return (
    <div className="list-group align-items-center">
      <Note/>
      <Note/>
      <Note/>
    </div>
  );
};

export default NotesList;
