import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <h3>AI Student Assistant</h3>

      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#2563eb",
    color: "white",
    alignItems: "center",
  },
};