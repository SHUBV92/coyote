import React, { useState } from "react";

const InputBox = () => {
  const [keyword, setKeyword] = useState("");
  const [
    showInputField,
    setShowInputField,
  ] = useState(true);

  return (
    <div
      onClick={() => {
        setShowInputField(false);
      }}
    >
      {showInputField ? (
        <input
          type="text"
          placeholder="Hello World"
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
      ) : null}
    </div>
  );
};

export default InputBox;
