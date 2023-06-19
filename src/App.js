import React, { useState } from "react";
import "./App.css";

function App() {

  let cTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(cTime);

  const updateTime = () => {
    let cTime = new Date().toLocaleTimeString();
    setTime(cTime)
  }
  setInterval(updateTime, 1000);


  return (
    <>
      <header>
        <h1>#4. React digital clock </h1>
      </header>
      <main>
        <h1>{time}</h1>
      </main>
    </>
  );
}

export default App;
