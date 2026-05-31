import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message) return;

    setChat([
      ...chat,
      {
        user: message,
        ai: "This is a placeholder AI response.",
      },
    ]);

    setMessage("");
  };

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>AI Chat Assistant</h2>

        <input
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
        />

        <button
          className="btn btn-primary"
          onClick={sendMessage}
        >
          Send
        </button>

        {chat.map((item, index) => (
          <div className="card" key={index}>
            <p>
              <strong>You:</strong> {item.user}
            </p>

            <p>
              <strong>AI:</strong> {item.ai}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}