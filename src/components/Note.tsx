import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotePreviewId } from "./../redux/actions/actions";

interface INote {
  noteText: string;
  title: string;
  id: number;
  date: Date;
}

const Note: React.FC<INote> = ({ noteText, title, date, id }) => {
  const data = new Date(date);

  const history = useHistory();
  const dispatch = useDispatch();

  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const configuratedDate = data
    .toLocaleDateString("en-US", dateOptions)
    .split(",");

  const month = configuratedDate[3];
  const time = configuratedDate[1];

  const handleNoteClick = () => {
    history.push(`${id}`);
    dispatch(setNotePreviewId(id));
  };

  return (
    <div className="list-group-item" onClick={handleNoteClick}>
      <div className="d-flex justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{month}</small>
      </div>
      <p className="mb-1">{noteText}</p>
      <small>{time}</small>
    </div>
  );
};

export default Note;
