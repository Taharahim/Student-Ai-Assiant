import Sidebar from "../components/Sidebar";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Profile</h2>

        <div className="card">
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </div>
  );
}