import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateNewNote from "./CreateNewNote";
import Navbar from "./Navbar";
import NotesList from "./NotesList";

const App: React.FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <NotesList />
        </Route>
        <Route path="/create-note">
          <CreateNewNote />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
