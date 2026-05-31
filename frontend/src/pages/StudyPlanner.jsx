import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function StudyPlanner() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Study Planner</h2>

        <input
          className="input"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          className="input"
          placeholder="Daily Hours"
          onChange={(e) => setHours(e.target.value)}
        />

        <div className="card">
          <h3>Study Plan</h3>

          <p>Subject: {subject}</p>
          <p>Daily Study Hours: {hours}</p>

          <p>
            Recommended: Study {hours} hours daily for
            consistent progress.
          </p>
        </div>
      </div>
    </div>
  );
}