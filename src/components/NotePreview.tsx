import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { deleteNote } from './../redux/actions/handleNoteList';

const NotePreview: React.FC = () => {

  const notePreview = useSelector(
    (state: AppState) =>
      state.notesList.filter(({ id }) => id === state.notePreviewId)[0]
  );

  const dispatch = useDispatch();

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
          <Link to="/" className="card-link" onClick={() => dispatch(deleteNote(notePreview.id))}>
            Delete note
          </Link>
          <a href="/" className="card-link">
            Archieve note
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotePreview;
