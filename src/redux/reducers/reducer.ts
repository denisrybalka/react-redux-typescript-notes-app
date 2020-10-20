import {
  Action,
  ADD_NEW_NOTE,
  SET_NEW_NOTE_TEXT,
  SET_NEW_NOTE_TITLE,
  SET_NOTE_PREVIEW_ID,
  FETCH_NOTES,
} from "../actions/actions";

export type AppState = {
  notesList: Array<any>;
  title: string;
  noteText: string;
  notePreviewId: null | number;
};

const initialState: AppState = {
  notesList: [],
  title: "",
  noteText: "",
  notePreviewId: null,
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
    case ADD_NEW_NOTE:
      const { title, noteText } = state;
      const newNote = {
        title,
        noteText,
        id: Date.now(),
        date: new Date(),
      };
      return {
        ...state,
        notesList: [newNote, ...state.notesList],
        title: "",
        noteText: "",
      };
    case SET_NOTE_PREVIEW_ID:
      return {
        ...state,
        notePreviewId: action.payload,
      };
    case FETCH_NOTES:
      return {
        ...state,
        notesList: action.payload,
      };
    default:
      return state;
  }
};
