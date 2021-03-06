import React, { useEffect, useState } from "react";

export default function Countertwo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    document.title=`${count1}`;
  });
  const handleClick1 = () => {
    setCount1(count1 + 1);
  };
  const handleClick2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={handleClick1}>click1</button>
      <h1>{count2}</h1>
      <button onClick={handleClick2}>Click2</button>
    </div>
  );
}
