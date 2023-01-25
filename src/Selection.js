import React, { useState } from "react";
import axios from "axios";

function Selection() {
  const [options1, setOptions1] = useState([
    "머리",
    "목부위",
    "몸통(torso)",
    "팔(상지, Upper limb)",
    "다리(하지, Lower limb)",
  ]);
  const [options2, setOptions2] = useState([
    "두피/눈꺼풀",
    "바깥눈근육(외안근, Extraocular muscles)",
    "내안근(Intraocular muscles)",
    "귀",
    "코",
    "입",
    "씹기",
    "혀",
    "물렁입천장(연구개, Soft palate)",
    "인두(Pharynx)",
    "후두(Larynx)",
  ]);
  const [selectedOption1, setSelectedOption1] = useState("머리");

  const handleChange = (event) => {
    setSelectedOption1(event.target.value);
    if (event.target.value === "머리") {
      setOptions2([
        "두피/눈꺼풀",
        "바깥눈근육(외안근, Extraocular muscles)",
        "내안근(Intraocular muscles)",
        "귀",
        "코",
        "입",
        "씹기",
        "혀",
        "물렁입천장(연구개, Soft palate)",
        "인두(Pharynx)",
        "후두(Larynx)",
      ]);
    } else if (event.target.value === "목부위") {
      setOptions2(["목부위_1", "목부위_2", "목부위_3"]);
    } else if (event.target.value === "몸통(torso)") {
      setOptions2(["몸통_1", "몸통_2", "몸통_3"]);
    } else if (event.target.value === "팔(상지, Upper limb)") {
      setOptions2(["팔_1", "팔_2", "팔_3"]);
    } else if (event.target.value === "다리(하지, Lower limb)") {
      setOptions2(["다리_1", "다리_2", "다리_3"]);
    }
  };

  return (
    <>
      <h2>this is selection Page.</h2>
      <select id="depth1" onChange={handleChange}>
        {options1.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>

      <select id="depth2" value={options2}>
        {options2.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </>
  );
}

export default Selection;
