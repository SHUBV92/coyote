import React, { useState } from "react";

const InputBox = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Hello World"
        value={keyword}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
      />
    </div>
  );
};

export default InputBox;
