import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Attendance() {
  const [total, setTotal] = useState(0);
  const [attended, setAttended] = useState(0);

  const percent = total ? ((attended / total) * 100).toFixed(2) : 0;

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Attendance</h2>

        <input
          className="input"
          placeholder="Total Classes"
          onChange={(e) => setTotal(Number(e.target.value))}
        />

        <input
          className="input"
          placeholder="Attended Classes"
          onChange={(e) => setAttended(Number(e.target.value))}
        />

        <div className="card">
          Attendance: {percent}%
        </div>
      </div>
    </div>
  );
}