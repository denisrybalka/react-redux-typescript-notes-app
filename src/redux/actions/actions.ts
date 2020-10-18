export const SET_NEW_NOTE_TITLE: string = "SET_NEW_NOTE_TITLE";
export const SET_NEW_NOTE_TEXT: string = "SET_NEW_NOTE_TEXT";
export const ADD_NEW_NOTE: string = "ADD_NEW_NOTE";

export type Action = {
  type: string;
  payload?: any;
};

export function setNewTitle(name: string): Action {
  return {
    type: SET_NEW_NOTE_TITLE,
    payload: name,
  };
}

export function setNewNoteText(text: string): Action {
  return {
    type: SET_NEW_NOTE_TEXT,
    payload: text,
  };
}

export function addNewNote(): Action {
  return {
    type: ADD_NEW_NOTE,
  };
}
