import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function MarksAnalyzer() {
  const [marks, setMarks] = useState({
    english: "",
    math: "",
    science: "",
  });

  const total =
    Number(marks.english || 0) +
    Number(marks.math || 0) +
    Number(marks.science || 0);

  const percentage = ((total / 300) * 100).toFixed(2);

  let grade = "F";

  if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Marks Analyzer</h2>

        <input
          className="input"
          placeholder="English"
          onChange={(e) =>
            setMarks({ ...marks, english: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Math"
          onChange={(e) =>
            setMarks({ ...marks, math: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Science"
          onChange={(e) =>
            setMarks({ ...marks, science: e.target.value })
          }
        />

        <div className="card">
          <h3>Total: {total}</h3>
          <h3>Percentage: {percentage}%</h3>
          <h3>Grade: {grade}</h3>
        </div>
      </div>
    </div>
  );
}