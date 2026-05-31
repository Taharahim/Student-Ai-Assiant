import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3>AI Assistant</h3>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/attendance">Attendance</Link>
      <Link to="/lectures">Lectures</Link>
      <Link to="/assignments">Assignments</Link>
      <Link to="/marks">Marks</Link>
      <Link to="/study-plan">Study Plan</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/chat">AI Chat</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    background: "#1e40af",
    color: "white",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};