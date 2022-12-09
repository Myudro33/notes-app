import * as React from "react";
import { Note } from "../models/note.models";
import Notes from "./Notes";

export interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export default function NotesList({ notes, setNotes }: INotesListProps) {  
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note: Note) => {
      return <Notes key={note.id} setNotes={setNotes} note={note} notes={notes} />;
    });
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
}
