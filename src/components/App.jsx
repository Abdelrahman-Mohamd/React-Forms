import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [heading, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    // to prevent the refresh after clicking submit
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1> Hello {heading}</h1>
      <form>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
