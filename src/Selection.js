import React, { useState } from "react";
import { Select, Space } from "antd";

const provinceData = [
  "머리",
  "목부위",
  "몸통(torso)",
  "팔(상지, Upper limb)",
  "다리(하지, Lower limb)",
];
const cityData = {
  머리: [
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
  ],
  목부위: [
    "빗장뼈 부위(Clavicular)",
    "목뿔위근육(설골상근, Suprahyoid muscles)",
    "목뿔아래근육(설골하근, Infrahyoid muscle)",
    "목 앞",
    "목 옆",
    "목 뒤",
  ],
  "몸통(torso)": [
    "등(back)",
    "가슴(chest)",
    "배(abdomen)",
    "골반(pelvis)",
    "회음(perineum)",
  ],
  "팔(상지, Upper limb)": [
    "척추",
    "흉벽(Thoracic walls)",
    "어깨",
    "위팔(상완, arm)",
    "위팔 앞면",
    "위팔 뒷면",
    "아래팔(전완, forearm)",
    "아래팔 앞면",
    "아래팔 앞 표면",
    "아래팔 앞 속",
    "아래팔 뒷면",
    "아래팔 뒷 표면",
    "아래팔 뒷 속",
    "손",
    "가쪽 손바닥(Lateral palmar)",
    "엄지두덩(Thenar eminence)",
    "안쪽 손바닥(Medial palmar)",
    "중간(Intermediate)",
  ],
  "다리(하지, Lower limb)": [
    "엉덩뼈 부위",
    "볼기 부위(Gluteal)",
    "넓적다리(윗다리, thigh)",
    "넓적다리 앞부분",
    "넓적다리 뒷부분/넙다리뒤근육(hamstring, 슬와근, 오금)",
    "넓적다리 안쪽 부분",
    "종아리(아랫다리, leg)",
    "종아리 앞면",
    "종아리 뒷면",
    "종아리 뒷 표면",
    "종아리 뒷 속",
    "종아리 옆면",
    "발",
    "발등",
    "발바닥",
    "첫번째 층(1st layer)",
    "두번째 층(2nd layer)",
    "세번째 층(3rd layer)",
    "네번째 층(4th layer)",
  ],
};

function Selection() {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <h2>Hi This is Charting Helper!</h2>
      <Space wrap>
        <Select
          showSearch
          defaultValue={provinceData[0]}
          style={{ width: "fit-content", minWidth: 200 }}
          onChange={handleProvinceChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={provinceData.map((province) => ({
            label: province,
            value: province,
          }))}
        />
        <Select
          showSearch
          style={{ width: "fit-content", minWidth: 200 }}
          value={secondCity}
          onChange={onSecondCityChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={cities.map((city) => ({ label: city, value: city }))}
        />
      </Space>
    </>
  );
}

export default Selection;
