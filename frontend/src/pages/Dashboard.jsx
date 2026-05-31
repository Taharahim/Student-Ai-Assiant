import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Welcome {user?.name}</h2>

        <div className="grid">
          <div className="card">Tasks Module Ready</div>
          <div className="card">Notes Module Ready</div>
          <div className="card">Attendance Module Ready</div>
        </div>
      </div>
    </div>
  );
}

