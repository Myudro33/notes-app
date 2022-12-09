import React, { useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { Note } from "../models/note.models";

export interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export default function CreateNotes({ notes, setNotes }: ICreateNotesProps) {
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("error");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: Number(Math.random()),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ])
    };

  return (
    <Form className="my-5" onSubmit={(e) => submitHandler(e)}>
      <h2>Create New Note</h2>
      <Form.Group className="mb-3">
        <Form.Label>Note Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" ref={titleRef} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          placeholder="enter your notes"
          as="textarea"
          rows={3}
          ref={textRef}
        />
        {error && (
          <Form.Text className="text-danger">Fill The Inputs Please</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="colorInput">Choose Background Color</Form.Label>
        <Form.Control
          type="color"
          id="colorInput"
          defaultValue={"#dfdfdf"}
          title="Note Background Color"
          ref={colorRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Note
      </Button>
    </Form>
  );
}
