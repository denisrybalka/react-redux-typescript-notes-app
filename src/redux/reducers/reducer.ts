import newId from './../../utils/uniqueId';
import {
  Action,
  ADD_NEW_NOTE,
  SET_NEW_NOTE_TEXT,
  SET_NEW_NOTE_TITLE,
  SET_NOTE_PREVIEW_ID,
} from "../actions/actions";

export type AppState = {
  notesList: Array<any>;
  title: string;
  noteText: string;
  notePreviewId: null | number;
};

const initialState: AppState = {
  notesList: [{
    title: 'Name',
    noteText: 'Bla bla dfsfsdjifsd fsdihfisdhfwe lorem ipsum',
    id: newId(),
    date: new Date(),
  }], // some mock info to preview
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
        id: newId(),
        date: new Date(),
      };
      return {
        ...state,
        notesList: [...state.notesList, newNote],
        title: '',
        noteText: ''
      };
    case SET_NOTE_PREVIEW_ID:
      return {
        ...state,
        notePreviewId: action.payload,
      }
    default:
      return state;
  }
};
