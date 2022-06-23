import React, { useContext, useState } from "react";
import FormContext from "./Contextfile";

export default function FormContainer2() {
  const data = useContext(FormContext);
  const [mob, setMob] = useState({
    mobile: "",
    capche: (Math.random() * 10000).toFixed(),
    ...data,
  });

  const handleChange = (e) => {
    const {value} = e.target
    setMob({...mob,mobile:value})
    console.log(mob)
  };
  const handleClick = () => {
     
  };
  return (
    <>
      <div
        className="main_div"
        style={{
          border: "2px solid black",
          width: "400px",
          height: "200px",
          margin: "auto",
        }}
      >
        <h3  style={{marginTop:"10px"}}>Mobile_no:</h3>
        <input
          style={{ height: "20px",marginTop:"10px"}}
          type="text"
          placeholder="Enter your number"
          value={mob.mobile}
          onChange={handleChange}
        ></input>
        <h4>{mob.capche}</h4>
        <button onClick = {handleClick}>Submit</button>
      </div>
    </>
  );
}
