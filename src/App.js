import React, { useEffect } from "react";
import axios from "axios";

function App() {
  // const buttonEvent = () => {
  //   axios.post("http://localhost:3001/Depth1/test").then((res) => {
  //     console.log("res : ", res);
  //   });
  // };

  const buttonEvent = () => {
    axios
      .post(
        "https://web-chartinghelperfrontend-sop272gld9krimc.gksl2.cloudtype.app/:3001/Depth1/test"
      )
      .then((res) => {
        console.log("res : ", res);
      });
  };

  return (
    <>
      <h2>First Page</h2>
      <button onClick={buttonEvent}>Click!</button>
      <select>test1</select>
      <select>test2</select>
      <select>test3</select>
    </>
  );
}

export default App;
