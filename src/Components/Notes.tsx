import * as React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Note } from "../models/note.models";

export interface INotesProps {
  note: Note;
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export default function Notes({ note, notes, setNotes }: INotesProps) {
  const deleteNote = () => {
    setNotes(
      notes.filter(
        (selectedNote: { id: number }) => selectedNote.id !== note.id
      )
    );
  };
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color, border: "none" }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button onClick={deleteNote} className="mt-2" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
