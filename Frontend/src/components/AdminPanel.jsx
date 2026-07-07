import { useEffect, useState } from "react";

function AdminPanel() {

  const [messages, setMessages] = useState([]);

  // Fetch messages
  const fetchMessages = async () => {
    const res = await fetch("http://localhost:8081/contact");
    const data = await res.json();
    setMessages(data);
  };

  // Delete message
  const deleteMessage = async (id) => {
    await fetch(`http://localhost:8081/contact/${id}`, {
      method: "DELETE"
    });
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>

      {messages.map((msg) => (
        <div key={msg.id} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
          <h4>{msg.name}</h4>
          <p>{msg.email}</p>
          <p>{msg.message}</p>

          <button onClick={() => deleteMessage(msg.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;