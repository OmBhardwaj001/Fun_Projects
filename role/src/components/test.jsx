import React, { useState } from "react";

function Test(){

   

  const [role, setRole] = useState("guest");

  const messages = {
    guest: "Please log in.",
    user: "Welcome back, User!",
    admin: "Welcome Admin",
  };

  return (
    <div>
  
      <h1>{messages[role]}</h1>

      {role === "admin" && <button>Go to Admin Panel</button>}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setRole("user")}>Login as User</button>
        <button onClick={() => setRole("admin")}>Login as Admin</button>
        <button onClick={() => setRole("guest")}>Logout</button>
      </div>
    </div>
  );
}



export default Test;