import React from "react";
import { Route, Switch } from "react-router-dom";

import CreateNewNote from "./CreateNewNote";
import Navbar from "./Navbar";
import NotePreview from "./NotePreview";
import NotesList from "./NotesList";

const App: React.FC = () => {
  return (
    <div className="container">
      <Switch>

        <Route path="/create-note" exact>
          <CreateNewNote />
        </Route>

        <Route path="/:id?" exact>
          <Navbar />
          <div className="row">
            <NotesList />
            <NotePreview />
          </div>
        </Route>
        
      </Switch>
    </div>
  );
};

export default App;
