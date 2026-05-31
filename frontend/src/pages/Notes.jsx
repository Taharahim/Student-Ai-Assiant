import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (!text) return;
    setNotes([...notes, text]);
    setText("");
  };

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Notes</h2>

        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="btn btn-primary" onClick={addNote}>
          Add Note
        </button>

        <div className="grid">
          {notes.map((n, i) => (
            <div className="card" key={i}>
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}