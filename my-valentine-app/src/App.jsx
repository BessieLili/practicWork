import { useState } from "react";
import "./App.css";

const App = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>
        <div className="card" style={{ top: hover ? "-90px" : "5px" }}>
          <div className="text">Happy<br />Valentine's<br />Day!</div>
          <div className="heart"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default App;
