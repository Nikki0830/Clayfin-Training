import React, { useState } from "react";

export default function Spread() {

  const [sprd, setSprd] = useState({
    name: "nikita",
    age: 24,
  });

  const handleClick=() => {
     setSprd({...sprd,name :"shubham"})
  }
  console.log(sprd)
  return (
      <>
    <button onClick = {handleClick}></button>
    </>
  )
}
