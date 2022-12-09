import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./App.css";
import CreateNotes from "./Components/CreateNotes";
import { Header } from "./Components/Header";
import NotesList from "./Components/NotesList";
import { Note } from "./models/note.models";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: Number(Math.random()),
      title: "new Note",
      text: "my first note",
      color: "#fbf4f2",
      date: new Date().toString(),
    }
  ]);
console.log(JSON.parse(localStorage.storage));

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList setNotes={setNotes} notes={notes} />
          </Col>
        </Row>
        <Row>
          <Col>
          <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
