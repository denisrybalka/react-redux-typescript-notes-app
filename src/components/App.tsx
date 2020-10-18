import React from "react";
import CreateNewNote from "./CreateNewNote";
import Navbar from './Navbar';
import NotesList from "./NotesList";

const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar/>
      <NotesList/>
      <CreateNewNote/>
    </div>
  );
};

export default App;
