import React from "react";

interface INote {
  noteText: string;
  title: string;
  date: Date;
}

const Note: React.FC<INote> = ({ noteText, title, date }) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const configuratedDate = date
    .toLocaleDateString("en-US", dateOptions);

  return (
    <a href="/" className="mb-2 list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{configuratedDate}</small>
      </div>
      <p className="mb-1">{noteText}</p>
      <small>Click to read more</small>
    </a>
  );
};

export default Note;
