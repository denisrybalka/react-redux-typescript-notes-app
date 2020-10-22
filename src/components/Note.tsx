import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNotePreviewId } from "../redux/actions/handleNoteFields";

const Note: React.FC<INote> = ({ noteText, title, date, id }) => {
  const data = new Date(date);
  const notePreviewId = useSelector((state: AppState) => state.notePreviewId);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNoteClick = () => {
    history.push(`${id}`);
    dispatch(setNotePreviewId(id));
  };

  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const configuratedDate = data
    .toLocaleDateString("ru", dateOptions)
    .split(",");

  const time = configuratedDate[2];
  const month = configuratedDate[1];

  const slicedNoteText =
    noteText.length > 40 ? noteText.slice(0, 40).concat("...") : noteText;

  let noteStyles = "list-group-item";

  if (notePreviewId === id) {
    noteStyles += " active";
  }

  return (
    <div className={noteStyles} onClick={handleNoteClick}>
      <div className="d-flex justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{time}</small>
      </div>
      <p className="mb-1">{slicedNoteText}</p>
      <small>{month}</small>
    </div>
  );
};

export default Note;
