import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function QuizGenerator() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Quiz Generator</h2>

        <div className="card">
          <h3>Question 1</h3>

          <p>Which language is used with React?</p>

          <button
            className="btn btn-primary"
            onClick={() => setScore(score + 1)}
          >
            JavaScript
          </button>

          <button className="btn">
            Python
          </button>
        </div>

        <div className="card">
          Current Score: {score}
        </div>
      </div>
    </div>
  );
}