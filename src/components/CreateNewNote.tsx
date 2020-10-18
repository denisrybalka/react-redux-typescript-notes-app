import React from "react";

const CreateNewNote: React.FC = () => {
  return (
    <form>
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
            aria-label="Title"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="form-group">
          <textarea className="form-control" id="noteTextarea" rows={3} placeholder="Your text here"/>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">Submit note</button>
      <button className="btn btn-light ml-2">Cancel</button>
    </form>
  );
};

export default CreateNewNote;
