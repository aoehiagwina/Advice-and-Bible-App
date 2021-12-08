import { useState } from "react";
import style from "styled-components";

const Advice_App = () => {
  const [advice, setAdvice] = useState("");

  const getter = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();
    setAdvice(data.slip);
  };

  return (
    <div>
      <h1>This is and advice app</h1>

      <h2>{advice.advice}</h2>

      <button onClick={getter}>More Counsel</button>
    </div>
  );
};

export default Advice_App;
