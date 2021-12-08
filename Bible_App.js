import { useState } from "react";
import style from "styled-components";

const Parent = style.div`
text-align : center;
border : solid;
color: dark-blue;
`

const Bible_App = () => {
  const [reference, setReference] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const getter = async () => {
    try {
      await setError({ error: false, message: "" });
      const scripture = await fetch("https://bible-api.com/" + input);
      if (scripture.status != 200) {
        throw new Error(
          "Your reference format is incorect. Use this format sample: John 3:16"
        );
      }
      const data = await scripture.json();
      setReference(data);
    } catch (error) {
      setError({ error: true, message: error.message });
    }
  };

  return (
    <Parent>
      <h1>This is a Bible App</h1>
      <input
        placeholder="e.g. John 14:4"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        type="text"
      />

      {/* <h3>{reference.text}</h3> */}

      <h3>{error.error ? error.message : reference.text}</h3>
      <button onClick={getter}>Submit</button>
    </Parent>
  );
};
export default Bible_App;
