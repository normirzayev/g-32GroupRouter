import React, { useEffect, useRef } from "react";
export default function Galary() {
  let inputRef = useRef();
  // console.log(inputRef.current);

  function handleGetValue() {
    console.log(inputRef.current.value);
  }
  
  // useEffect(() => {
  // });

  return (
    <>
      <button onClick={handleGetValue}> click ref </button>
      <input
        type="text"
        ref={inputRef}
        // onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
}
