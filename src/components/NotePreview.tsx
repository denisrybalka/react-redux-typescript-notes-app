import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/reducer";

const NotePreview: React.FC = () => {

  const notePreview = useSelector(
    (state: AppState) =>
      state.notesList.filter(({ id }) => id === state.notePreviewId)[0]
  );

  if (!notePreview) {
    return (
      <div>
        <p className="text-muted">Click to note to preview it.</p>
      </div>
    );
  }

  const { title, noteText } = notePreview;

  return (
    <div className="col-7">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{noteText}</p>
          <a href="/" className="card-link">
            Delete note
          </a>
          <a href="/" className="card-link">
            Archieve note
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotePreview;
