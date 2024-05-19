import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <p></p>
      <label for="name">Enter you name:</label>
      <input id="name" onChange={handleChange}></input>
      {name.length > 0 ? <p>Hello {name}!</p> : null}
    </div>
  );
};

export default App;
