import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Assignments() {
  const [assignments] = useState([
    {
      title: "React Project",
      dueDate: "2026-06-15",
    },
    {
      title: "MongoDB Database Design",
      dueDate: "2026-06-20",
    },
  ]);

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Assignments</h2>

        <div className="grid">
          {assignments.map((assignment, index) => (
            <div className="card" key={index}>
              <h3>{assignment.title}</h3>
              <p>Due: {assignment.dueDate}</p>

              <button className="btn btn-primary">
                Submit Assignment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}