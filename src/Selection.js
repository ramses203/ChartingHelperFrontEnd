import React, { useEffect } from "react";
import axios from "axios";

function Selection() {
  const buttonEvent = () => {
    axios
      .post(
        //"https://port-0-chartinghelperbackend-sop272gld9krimc.gksl2.cloudtype.app/Depth1/test"
        "/Depth1/test"
      )
      .then((res) => {
        console.log("res : ", res);
      });
  };

  return (
    <>
      <h2>this is selection Page.</h2>
      <button onClick={buttonEvent}>Click!</button>
    </>
  );
}
export default Selection;
