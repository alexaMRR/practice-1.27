import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <LightSwitch />
    </div>
  );
}

// The Light Switch Component
function LightSwitch() {
  const [light, setLight] = useState("on");

  // Changes the light to on or off
  function changeLight() {
    if (light === "on") {
      setLight("off");
    } else {
      setLight("on");
    }
  }

  return (
    <div>
      <div>The switch is {light}</div>
      <button onClick={changeLight}>Change state</button>
    </div>
  );
}
