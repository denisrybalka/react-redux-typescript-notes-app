import {
  Action,
  SET_NEW_NOTE_TEXT,
  SET_NEW_NOTE_TITLE,
} from "../actions/actions";

export type AppState = {
  notesList: Array<any>;
  title: string;
  noteText: string;
};

const initialState: AppState = {
  notesList: [],
  title: "",
  noteText: "",
};

export const reducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case SET_NEW_NOTE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_NEW_NOTE_TEXT:
      return {
        ...state,
        noteText: action.payload,
      };
    default:
      return state;
  }
};
