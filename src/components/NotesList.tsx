import React from "react";
import Note from './Note';

const NotesList: React.FC = () => {
  return (
    <div className="list-group">
      <Note/>
    </div>
  );
};

export default NotesList;
