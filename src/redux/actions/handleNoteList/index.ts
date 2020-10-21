import { ADD_NEW_NOTE, FETCH_NOTES, DELETE_NOTE } from './types';

export function addNewNote(fields: {}): Action {
  return {
    type: ADD_NEW_NOTE,
    payload: fields,
  };
}

export function fetchNotes(notes: any): Action {
  return {
    type: FETCH_NOTES,
    payload: notes,
  };
}

export function deleteNote(id: number): Action {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}
