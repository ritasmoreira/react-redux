import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
        <button onClick={() => setResource(null)}>Todos</button>
      </div>
      {resource !== null ? <ResourceList resource={resource} /> : <UserList />}
    </div>
  );
};

export default App;
