import React from "react";
import Navbar from './Navbar';
import NotesList from "./NotesList";

const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar/>
      <NotesList/>
    </div>
  );
};

export default App;
