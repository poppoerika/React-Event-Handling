import React, { useState } from "react";

function App() {
  const [mouseState, setButtonStyle] = useState();

  function changeBBG() {
    setButtonStyle(true);
  }

  function changeWBG() {
    setButtonStyle(false);
  }

  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseState ? "black" : "white" }}
        onMouseOver={changeBBG}
        onMouseOut={changeWBG}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
