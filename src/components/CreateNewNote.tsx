import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { addNewNote } from "../redux/actions/handleNoteList";
import {
  setNewTitle,
  setNewNoteText,
} from "./../redux/actions/handleNoteFields";

const CreateNewNote: React.FC = () => {
  const { title, noteText } = useSelector(
    (state: AppState) => state.noteFields
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(addNewNote({ title, noteText }));
    history.push("/");
  };

  return (
    <form
      className="card m-5 p-5 d-flex flex-column align-items-center"
      onSubmit={(event) => handleFormSubmit(event)}
    >
      <div className="w-50">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              #
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Note's title"
            value={title}
            onChange={(e) => dispatch(setNewTitle(e.target.value))}
            required
            minLength={3}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="noteTextarea"
            rows={3}
            value={noteText}
            onChange={(e) => dispatch(setNewNoteText(e.target.value))}
            placeholder="Your text here"
            required
          />
        </div>
      </div>
      <div className="w-50">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Link to="/" className="btn btn-light ml-2" type="reset">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreateNewNote;
