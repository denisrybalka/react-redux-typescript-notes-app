import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppState } from "../redux/reducers/reducer";
import {
  setNewTitle,
  setNewNoteText,
  addNewNote,
} from "./../redux/actions/actions";

const CreateNewNote: React.FC = () => {
  const { title, noteText } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(addNewNote());
    history.push("/");
  };

  return (
    <form
      className="card m-5 p-5 d-flex flex-column align-items-center"
      onSubmit={(event) => handleSubmitForm(event)}
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
